import React from "react";
import styles from "./TrackingUi.module.css";
const TrackingUi = ({ stateData }) => {
  console.log(stateData);
  return (
    <>
      <div className=" lineBorder ">
        <div className="lineUI mt-2  ">
          <div
            className={
              stateData === "DELIVERED"
                ? "stateDel"
                : stateData === "CANCELLED"
                ? "stateCancel"
                : "stateDuring "
            }
          >
            <div className="items w-100 d-flex justify-content-between">
              <i className="fa-regular fa-circle-check " />
              <i className="fa-regular fa-circle-check " />

              <div className="thirdIcon ">
                {stateData === "DELIVERED" ? (
                  <i className="fa-regular fa-circle-check " />
                ) : (
                  <i className="fa-solid fa-truck " />
                )}
              </div>

              <div className="forthIcon">
                {stateData === "DELIVERED" ? (
                  <i className="fa-regular fa-circle-check " />
                ) : (
                  <i
                    className="fa-solid fa-house-circle-check 
              "
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="homeBorder mt-1 d-flex flex-row p-3">
        <div>
          <i className="fa-regular fa-circle-check mx-5" />
        </div>
        <div>
          <i className="fa-regular fa-circle-check mx-5" />
        </div>
        <div>
          <i className="fa-solid fa-truck mx-5" />
        </div>

        <div>
          <i className="fa-solid fa-house-circle-check mx-5" />
        </div>
      </div> */}
    </>
  );
};

export default TrackingUi;
