import "./App.css";
import "./i18next";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TrackingProvider } from "./Context/TrackingContext";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import TrackingForm from "./component/TrackingForm/TrackingForm";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <TrackingForm />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <>
      <TrackingProvider>
        <RouterProvider router={routes}>
          <Layout />
        </RouterProvider>
      </TrackingProvider>
    </>
  );
}

export default App;
