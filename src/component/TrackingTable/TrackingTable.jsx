import React from "react";
import styles from "./TrackingTable.module.css";
import { useTranslation } from "react-i18next";
const TrackingTable = ({ stateData }) => {
  const { t } = useTranslation();
  const formatDateTable = (timestamp) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return new Date(timestamp).toLocaleDateString("ar-EG", options);
  };

  const formatTimeTable = (timestamp) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return new Date(timestamp).toLocaleTimeString("ar-EG", options);
  };
  return (
    <>
      <div className="col-md-8">
        <h5 className="h5 mb-4">تفاصيل الشحنة</h5>
        <table className="border">
          <thead className="table-bg">
            <tr>
              <th className="px-5 py-3">الفرع</th>
              <th className="px-5 py-3">التاريخ</th>
              <th className="px-5 py-3">الوقت</th>
              <th className="px-5 py-3">تفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {stateData.TransitEvents.map((event, index) => (
              <>
                <tr key={index}>
                  <td className="px-5 py-3">{event.hub || "لا يوجد"}</td>
                  <td className="px-5 py-3">
                    {formatDateTable(event.timestamp)}
                  </td>
                  <td className="px-5 py-3">
                    {formatTimeTable(event.timestamp)}
                  </td>
                  <td className="px-5 py-3">{t(`${event.state}`)}</td>
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
