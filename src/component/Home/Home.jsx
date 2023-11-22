import React, { useContext } from "react";
import styles from "./Home.module.css";
import prob from "../../assets/imgs/problem.png";
import { TrackingDataContext } from "../../Context/TrackingContext";
import HorizontalLinearStepper from "../TrackingUI/TrackingUI";
import TrackingUi from "../TrackingUI/TrackingUI";
import TrackingTable from "../TrackingTable/TrackingTable";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const { stateData, loading } = useContext(TrackingDataContext);

  console.log(stateData);
  //Convert the date:
  function formatDateString(dateString) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleString("ar-EG", options);
    return formattedDate;
  }
  // Convert of the promise date:
  function formatDateStringPromiseDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleString("ar-EG", options);
    return formattedDate;
  }
  //Get the reason for TarackingUI:
  const reason = stateData?.TransitEvents?.filter(
    (event) => event.reason !== undefined && event.reason !== null
  ).map((event) => t(event.reason));

  if (loading || !stateData) {
    return (
      <div className="container border">
        <p className="text-danger display-3">
          <strong>Loading...</strong>
        </p>
      </div>
    );
  }
  return (
    <>
      {stateData && (
        <div className="container mt-5">
          {/* info shipping */}

          {stateData?.CurrentStatus && (
            <>
              <div className="row">
                <div className="d-flex flex-column col-lg-12">
                  <div className="status   d-flex flex-row justify-content-between homeBorder">
                    {/* رقم الشحن  */}
                    <div className="d-flex flex-column d1">
                      <p className="">رقم الشحن</p>
                      <p className="info">{stateData?.TrackingNumber}</p>
                    </div>
                    {/* state */}
                    <div className="d-flex flex-column d1">
                      <p className="">حالة الشحنة</p>

                      <p
                        className="info"
                        style={{
                          color:
                            stateData?.CurrentStatus.state === "DELIVERED"
                              ? "#00C54D"
                              : stateData?.CurrentStatus.state === "CANCELLED"
                              ? "#e30613"
                              : "#FFB12B",
                        }}
                      >
                        {t(`${stateData?.CurrentStatus.state}`)}
                      </p>
                    </div>
                    {/* update */}
                    <div className="d-flex flex-column d1">
                      <p className="">آخر تحديث </p>
                      <p className="info">
                        {formatDateString(stateData?.CurrentStatus.timestamp)}
                      </p>
                    </div>
                    {/* NAMe */}
                    <div className="d-flex  flex-column d1">
                      <p className="">اسم التاجر</p>
                      <p className="info">Souq.com</p>
                    </div>
                    {/* Date */}
                    <div className="d-flex flex-column d1">
                      <p className="">موعد التسليم خلال</p>
                      <p className="info">
                        {formatDateStringPromiseDate(stateData?.PromisedDate)}
                      </p>
                    </div>
                  </div>
                  {/* ui of tracking */}
                  <div className=" ">
                    <TrackingUi
                      stateData={stateData?.CurrentStatus?.state}
                      reason={reason}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {stateData?.TransitEvents && (
            <>
              <div className="row mt-5">
                {/* Table details */}
                <TrackingTable stateData={stateData} />

                {/* Adress and complain */}
                <div className="col-lg-4 ">
                  <h5 className="h5 title mb-4">عنوان التسليم</h5>
                  <div className="bg p-3">
                    آمبابة شارع طلعت حرب مدينة العمال بجوار البرنس منرل ١٧بلوك
                    ٣٣،،، Cairo
                  </div>

                  {/* Compain */}
                  <div className="mt-4 d-flex flex-row homeBorder p-4">
                    <img src={prob} alt="Complain" width={100} />
                    <div className="mx-4 ">
                      <p className="text title">
                        <strong>!هل يوجد مشكلة في شحنتك؟</strong>
                      </p>
                      <button className="btn  w-100">أبلاغ عن مشكلة</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
