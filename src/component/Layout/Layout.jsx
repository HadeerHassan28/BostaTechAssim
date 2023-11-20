import NavBar from "../NavBar/NavBar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <NavBar />
          <div className="my-5 py-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
