import React, { useContext } from "react";
import styles from "./Home.module.css";
import prob from "../../assets/imgs/problem.png";
import { TrackingDataContext } from "../../Context/TrackingContext";
import { LanguageContext } from "../../Context/LangContext";
import HorizontalLinearStepper from "../TrackingUI/TrackingUI";
import TrackingUi from "../TrackingUI/TrackingUI";
import TrackingTable from "../TrackingTable/TrackingTable";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const { stateData, loading } = useContext(TrackingDataContext);
  const { lang } = useContext(LanguageContext);

  // console.log(stateData);
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

    if (lang == "ar") {
      const formattedDate = new Date(dateString).toLocaleString(
        "ar-EG",
        options
      );
      return formattedDate;
    } else {
      const formattedDate = new Date(dateString).toLocaleString(
        "en-US",
        options
      );
      return formattedDate;
    }
  }
  // Convert of the promise date:
  function formatDateStringPromiseDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    if (lang == "ar") {
      const formattedDate = new Date(dateString).toLocaleString(
        "ar-EG",
        options
      );
      return formattedDate;
    } else {
      const formattedDate = new Date(dateString).toLocaleString(
        "en-US",
        options
      );
      return formattedDate;
    }
  }
  //Get the reason for TarackingUI:
  const reason = stateData?.TransitEvents?.filter(
    (event) => event.reason !== undefined && event.reason !== null
  ).map((event) => t(`${event.reason}`));

  if (loading || !stateData) {
    return (
      <div className="container border">
        <p className="text-danger display-3">
          <strong>{t("Loading...")}</strong>
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
                      <p className="">{t("Tracking no.")}</p>
                      <p className="info">{stateData?.TrackingNumber}</p>
                    </div>
                    {/* state */}
                    <div className="d-flex flex-column d1">
                      <p className="">{t("Status")}</p>

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
                      <p className="">{t("Last Update")}</p>
                      <p className="info">
                        {formatDateString(stateData?.CurrentStatus.timestamp)}
                      </p>
                    </div>
                    {/* NAMe */}
                    <div className="d-flex  flex-column d1">
                      <p className="">{t("Merchant Name ")}</p>
                      <p className="info">Souq.com</p>
                    </div>
                    {/* Date */}
                    <div className="d-flex flex-column d1">
                      <p className="">{t("Delivery time is within")}</p>
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
                  <h5 className="h5 title mb-4">{t("Delivery address")}</h5>
                  <div className="bg p-3">
                    {t(
                      "Imbaba, Talaat Harb Street, Al-Ummal City, next to Prince Mineral, Block 17  33,,, Cairo"
                    )}
                  </div>

                  {/* Compain */}
                  <div className="mt-4 d-flex flex-row homeBorder p-4">
                    <img src={prob} alt="Complain" width={100} />
                    <div className="mx-4 ">
                      <p className="text title">
                        <strong>
                          {t("Is there a problem with your shipment?!")}
                        </strong>
                      </p>
                      <button className="btn  w-100">
                        {t("Report a problem")}
                      </button>
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
