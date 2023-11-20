import React from "react";
import styles from "./Home.module.css";
import prob from "../../assets/imgs/problem.png";
const Home = () => {
  return (
    <>
      <div className="container mt-5">
        {/* info shipping */}
        <div className="homeBorder">
          <div className="status   d-flex flex-row justify-content-between">
            <p className="px-2">رقم الشحن</p>
            <p className="px-2">حالة الشحنة</p>
            <p className="px-2">آخر تحديث </p>
            <p className="px-2">اسم التاجر</p>
            <p className="px-2">موعد التسليم خلال</p>
          </div>
          <div className="status  d-flex flex-row justify-content-between pt-0 me-2 ">
            <p className="">444444</p>
            <p className=""> تم إلغاء الشحنة</p>
            <p className=""> الأثنين 06/04/2020 at 5:33 pm</p>
            <p className="">SOUQ.COM</p>
            <p className=""> 3 يناير 2020</p>
          </div>
        </div>
        {/* ui of tracking */}
        <div className="homeBorder mt-1 d-flex flex-row p-3">
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
        </div>

        <div className="row mt-5">
          {/* Table details */}
          <div className="col-md-8">
            <h5 className="h5 ">
              <strong></strong>تفاصيل الشحنة
            </h5>
            <table>
              <thead className="table-bg">
                <tr>
                  <th className="px-5 py-3">الفرع</th>
                  <th className="px-5 py-3">التاريخ</th>
                  <th className="px-5 py-3">الوقت</th>
                  <th className="px-5 py-3">تفاصيل</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <div className="col-md-4">
            <h5 className="h5 title">عنوان التسليم</h5>
            <div className="table-bg ">hhh</div>

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
      </div>
    </>
  );
};

export default Home;
