import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/imgs/logo.png";
const NavBar = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container  d-flex justify-content-between align-items-center ">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width={50} />
            <span className="text-danger">
              {" "}
              <strong> {t("Bosta")}</strong>
            </span>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  <strong className="text px-4"> {t("Home")}</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <strong className="text px-4">{t("Prices")}</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <strong className="text px-4"> {t("Call Sales")}</strong>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 mx-5 pe-5 d-flex justify-content-end">
              <li className="nav-item">
                <Link className="nav-link">
                  <strong className="text"> {t("shipping")}</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  <strong className="text">{t("Login")}</strong>
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  <strong className="text-danger"> EN</strong>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
