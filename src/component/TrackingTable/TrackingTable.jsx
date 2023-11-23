import React, { useContext } from "react";
import styles from "./TrackingTable.module.css";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../Context/LangContext";
const TrackingTable = ({ stateData }) => {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const formatDateTable = (timestamp) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    if (lang == "ar")
      return new Date(timestamp).toLocaleDateString("ar-EG", options);
    else return new Date(timestamp).toLocaleDateString("en-US", options);
  };

  const formatTimeTable = (timestamp) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    if (lang == "ar")
      return new Date(timestamp).toLocaleTimeString("ar-EG", options);
    else return new Date(timestamp).toLocaleTimeString("en-US", options);
  };
  // console.log(stateData);
  return (
    <>
      <div className="col-lg-8">
        <h5 className="h5 mb-4">{t("Shipping Info")}</h5>
        <table className="border table-responsive">
          <thead className="table-bg">
            <tr>
              <th className="px-5 py-3">{t("Branch")}</th>
              <th className="px-5 py-3"> {t("Date")}</th>
              <th className="px-5 py-3">{t("ُTime")}</th>
              <th className="px-5 py-3">{t("ُDetails")}</th>
            </tr>
          </thead>
          <tbody>
            {stateData.TransitEvents.map((event, index) => (
              <>
                <tr key={index}>
                  <td className="px-5 py-3">
                    {event.hub != undefined ? t(`${event.hub}`) : t("N-A")}
                  </td>
                  <td className="px-5 py-3">
                    {formatDateTable(event.timestamp)}
                  </td>
                  <td className="px-5 py-3">
                    {formatTimeTable(event.timestamp)}
                  </td>
                  <td className="px-5 py-3">
                    {t(`${event.state}`)}
                    {event.reason != undefined ? (
                      <p className="text-danger">{t(`${event.reason}`)}</p>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td colSpan="4" className="line"></td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TrackingTable;
