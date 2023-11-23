import "./App.css";
import "./i18next";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrackingProvider from "./Context/TrackingContext";
import LanguageProvider from "./Context/LangContext";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import TrackingForm from "./component/TrackingForm/TrackingForm";
import NotFound from "./component/NotFound/NotFound";
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
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <LanguageProvider>
        <TrackingProvider>
          <RouterProvider router={routes}>
            <Layout />
          </RouterProvider>
        </TrackingProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
