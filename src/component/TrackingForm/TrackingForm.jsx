import React, { useState, useContext } from "react";
import { TrackingDataContext } from "../../Context/TrackingContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
useNavigate;
const TrackingForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [trackingNumber, setTrackingNumber] = useState("");
  const { setTrackingAndFetch } = useContext(TrackingDataContext);

  const handleTrack = async () => {
    try {
      await setTrackingAndFetch(trackingNumber);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 border">
      <div className="d-flex justify-content-center algin-item-center">
        <h3 className="h3 text-danger">
          {t("Please Enter a Tracking Number")}
        </h3>
      </div>

      <div className="d-flex justify-content-center algin-item-center mt-4 ">
        <input
          className="mx-3 w-50"
          type="text"
          placeholder={t("Please Enter a Tracking Number")}
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button className="btn btn-danger px-5" onClick={handleTrack}>
          {t("Track Ship")}
        </button>
      </div>
    </div>
  );
};

export default TrackingForm;
