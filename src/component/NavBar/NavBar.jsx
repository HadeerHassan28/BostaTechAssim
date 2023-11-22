import React, { useState, useContext } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/imgs/logo.png";
import { Modal, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TrackingDataContext } from "../../Context/TrackingContext";
const NavBar = () => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [isShippingButtonActive, setShippingButtonActive] = useState("");

  const handleShowModal = () => {
    setShowModal(true);
    setShippingButtonActive("#e30613");
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setShippingButtonActive(false);
  };

  //for search button of modal:
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
            className="navbar-toggler"
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
                  <button onClick={handleShowModal} className="navBtn ">
                    <strong
                      className=" text "
                      style={{ color: isShippingButtonActive }}
                    >
                      {t("shipping")}
                      {isShippingButtonActive && (
                        <i className="fa-solid fa-arrow-left fs-6"></i>
                      )}
                    </strong>
                  </button>
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
        {/* Modal for Shipping */}
        <Modal
          backdropClassName="custom-modal-backdrop"
          dialogClassName="modal-custom"
          show={showModal}
          onHide={handleCloseModal}
          style={{
            marginTop: "46px",
            left: "-155px",
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>لتتبع شحنتك</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <input
                className="mx-3 w-50"
                type="text"
                placeholder={t("Please Enter a Tracking Number")}
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <Button onClick={handleTrack}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </Button>
            </InputGroup>
          </Modal.Body>
        </Modal>
      </nav>
    </>
  );
};

export default NavBar;
