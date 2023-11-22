import React, { useEffect, useReducer, useState, useCallback } from "react";
import useAxios from "axios-hooks";
import Reducer from "./reducer";
import { GET_DATA, FETCH_ERROR } from "./reducersTypes";

export const TrackingDataContext = React.createContext();

const TrackingProvider = ({ children }) => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [{ data, loading, error }, refetch] = useAxios({
    url: trackingNumber
      ? `https://tracking.bosta.co/shipments/track/${trackingNumber}`
      : null,
    method: "GET",
  });
  console.log(data);
  const [state, dispatch] = useReducer(Reducer, {
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: GET_DATA, payload: data });
    } else if (error) {
      dispatch({ type: FETCH_ERROR, payload: error });

      if (trackingNumber) {
        // Make the API call only when trackingNumber is not empty
        refetch();
      }
    }
  }, [trackingNumber, refetch, data, error]);

  const setTrackingAndFetch = useCallback((newTrackingNumber) => {
    setTrackingNumber(newTrackingNumber);
  }, []);
  if (loading) {
    return (
      <div className="container border">
        <p className="text-danger display-3">
          <strong>Loading...</strong>
        </p>
      </div>
    );
  }

  console.log(state.data);

  const values = {
    stateData: state.data,
    setTrackingAndFetch,
    loading,
  };

  return (
    <TrackingDataContext.Provider value={values}>
      {children}
    </TrackingDataContext.Provider>
  );
};
export default TrackingProvider;
