// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepConnector from "@mui/material/StepConnector";
// import { Typography } from "@mui/material";

// export default function HorizontalLinearAlternativeLabelStepper({
//   stateData,
//   reason,
// }) {
//   const activeStep = 1;
//   const steps = [
//     "تم أنشاء الشحنة",
//     "تم أستلام الشحنة من التاجر",
//     "الشحنة خرجت للتسليم",
//     "تم التسليم",
//   ];

//   return (
//     <Box
//       sx={{
//         width: "87%",
//         marginTop: "15px",
//         marginBottom: "15px",
//       }}
//     >
//       <Stepper
//         activeStep={activeStep}
//         alternativeLabel
//         connector={<StepConnectorColorized stateData={stateData} />}
//       >
//         {steps.map((label, index) => (
//           <Step key={index}>
//             <StepLabelIcon
//               active={index === activeStep - 1}
//               stateData={stateData}
//             >
//               <Typography
//                 style={{
//                   fontWeight: index + 1 === steps.length ? 500 : 500,
//                   color: "black",
//                 }}
//               >
//                 {label}
//               </Typography>

//               {/* Display reason */}
//               {label == "الشحنة خرجت للتسليم" &&
//                 reason &&
//                 stateData != "DELIVERED" && (
//                   <Typography style={{ color: "#e30613" }}>{reason}</Typography>
//                 )}
//             </StepLabelIcon>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// }
// // Line
// function StepConnectorColorized(stateData) {
//   return (
//     <StepConnector
//       style={{
//         backgroundColor:
//           stateData.stateData == "DELIVERED"
//             ? "#00c54d"
//             : stateData.stateData == "CANCELLED"
//             ? "#e30613"
//             : "#ffb12b",

//         height: "10px",
//         top: "6px",
//       }}
//     />
//   );
// }
// // Icons:
// function StepLabelIcon({ index, stateData, children }) {
//   const iconColor =
//     stateData === "DELIVERED"
//       ? "#00c54d"
//       : stateData === "CANCELLED"
//       ? "#e30613"
//       : "#ffb12b";
//   const isDelivered = stateData?.CurrentStatus?.state === "DELIVERED";

//   return (
//     <StepLabel
//       icon={
//         <div
//           style={{
//             borderRadius: "20px",
//             border: `1px solid ${iconColor}`,
//             backgroundColor: iconColor,
//           }}
//         >
//           {index === 2 && isDelivered ? (
//             <i
//               className="fa-solid fa-truck fs-3"
//               style={{ backgroundColor: iconColor, color: "white" }}
//             />
//           ) : index === 3 && isDelivered ? (
//             <i
//               className="fa-solid fa-house-circle-check fs-3"
//               style={{ backgroundColor: iconColor, color: "white" }}
//             />
//           ) : (
//             <i
//               className="fa-solid fa-check fs-6"
//               style={{
//                 backgroundColor: iconColor,
//                 color: "white",
//               }}
//             />
//           )}
//         </div>
//       }
//     >
//       {children}
//     </StepLabel>
//   );
// }

import { t } from "i18next";
import React from "react";

import styles from "./TrackingUi.module.css";
const TrackingUi = ({ stateData, reason }) => {
  return (
    <>
      <div className=" lineBorder ">
        <div className="lineUI mt-2  ">
          <div
            className={
              stateData == "DELIVERED"
                ? "stateDel"
                : stateData == "CANCELLED"
                ? "stateCancel"
                : "stateDuring "
            }
          >
            <div className="items w-100 d-flex justify-content-between ">
              {/* 1st icon */}
              <i
                className="fa-solid fa-check roundDel1 "
                style={{
                  backgroundColor:
                    stateData === "DELIVERED"
                      ? "#00c54d"
                      : stateData === "CANCELLED"
                      ? "#e30613"
                      : "#ffb12b ",
                }}
              ></i>
              {/* 2nd icon */}
              <i
                className="fa-solid fa-check roundDel2"
                style={{
                  backgroundColor:
                    stateData === "DELIVERED"
                      ? "#00c54d"
                      : stateData === "CANCELLED"
                      ? "#e30613"
                      : "#ffb12b ",
                }}
              ></i>
              {/* 3rd idon */}
              {/* <div className="thirdIcon "> */}
              {stateData === "DELIVERED" ? (
                <i
                  className="fa-solid fa-check roundDel3"
                  style={{
                    backgroundColor:
                      stateData === "DELIVERED"
                        ? "#00c54d"
                        : stateData === "CANCELLED"
                        ? "#e30613"
                        : "#ffb12b ",
                  }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-truck roundCal3 fs-5"
                  style={{
                    backgroundColor:
                      stateData === "DELIVERED"
                        ? "#00c54d"
                        : stateData === "CANCELLED"
                        ? "#e30613"
                        : "#ffb12b ",
                    color: "white",
                  }}
                />
              )}
              {/* </div> */}
              {/* 4th icon */}
              {/* <div className="forthIcon"> */}
              {stateData === "DELIVERED" ? (
                <i
                  className="fa-solid fa-check roundDel4"
                  style={{
                    backgroundColor:
                      stateData === "DELIVERED"
                        ? "#00c54d"
                        : stateData === "CANCELLED"
                        ? "#e30613"
                        : "#ffb12b ",
                  }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-house-circle-check roundCal4
            "
                  style={{
                    backgroundColor:
                      stateData === "DELIVERED" ? "#00c54d" : "gray",
                    color: "white",
                  }}
                />
              )}
              {/* </div> */}
            </div>
            <div className="d-flex justify-content-between w-100 ">
              <p className="text title py-3 ">تم أنشاء الشحنة</p>
              <p className="text title py-3 ">تم أستلام الشحنة من التاجر</p>
              <p className="text title py-3 ">الشحنة خرجت للتسليم </p>

              <p className="text title py-3 ">تم التسليم </p>
            </div>
          </div>
        </div>
        <div className="my-5 text-center ">
          {reason && (
            <p
              style={{
                color:
                  stateData === "DELIVERED"
                    ? "#00C54D"
                    : stateData === "CANCELLED"
                    ? "#e30613"
                    : "#FFB12B",
              }}
            >
              {reason}
            </p>
          )}
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
