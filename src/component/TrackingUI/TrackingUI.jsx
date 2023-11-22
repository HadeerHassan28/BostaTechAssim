import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

// import React from "react";
// import styles from "./TrackingUi.module.css";
// const TrackingUi = ({ stateData, reason }) => {
//   console.log(stateData);

//   return <div>TEST</div>;

// return (
//   <>
//     <div className=" lineBorder ">
//       <div className="lineUI mt-2  ">
//         <div
//           className={
//             stateData === "DELIVERED"
//               ? "stateDel"
//               : stateData === "CANCELLED"
//               ? "stateCancel"
//               : "stateDuring "
//           }
//         >
//           <div className="items w-100 d-flex justify-content-between">
//             <i className="fa-regular fa-circle-check " />

//             <i className="fa-regular fa-circle-check secItem" />

//             {/* <div className="thirdIcon "> */}
//             {stateData === "DELIVERED" ? (
//               <i className="fa-regular fa-circle-check " />
//             ) : (
//               <i className="fa-solid fa-truck fs-3" />
//             )}
//             {/* </div> */}

//             {/* <div className="forthIcon"> */}
//             {stateData === "DELIVERED" ? (
//               <i className="fa-regular fa-circle-check " />
//             ) : (
//               <i
//                 className="fa-solid fa-house-circle-check fs-3
//             "
//               />
//             )}
//             {/* </div> */}
//           </div>
//           <div className="d-flex justify-content-between w-100 ">
//             <p className="text title py-3 ">تم أنشاء الشحنة</p>
//             <p className="text title py-3 ">تم أستلام الشحنة من التاجر</p>
//             <p className="text title py-3 ">الشحنة خرجت للتسليم </p>
//             {reason && (
//               <p
//                 style={{
//                   color:
//                     stateData?.CurrentStatus.state === "DELIVERED"
//                       ? "#00C54D"
//                       : stateData?.CurrentStatus.state === "CANCELLED"
//                       ? "#e30613"
//                       : "#FFB12B",
//                 }}
//               >
//                 {reason}
//               </p>
//             )}
//             <p className="text title py-3 ">تم التسليم </p>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* <div className="homeBorder mt-1 d-flex flex-row p-3">
//       <div>
//         <i className="fa-regular fa-circle-check mx-5" />
//       </div>
//       <div>
//         <i className="fa-regular fa-circle-check mx-5" />
//       </div>
//       <div>
//         <i className="fa-solid fa-truck mx-5" />
//       </div>

//       <div>
//         <i className="fa-solid fa-house-circle-check mx-5" />
//       </div>
//     </div> */}
//   </>
// );
//};

// export default TrackingUi;
