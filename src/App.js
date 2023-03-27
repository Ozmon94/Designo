import Home from "pages/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import About from "pages/About/About";
import AppDesign from "pages/AppDesign/AppDesign";
import Contact from "pages/Contact/Contact";
import GraphicDesign from "pages/GraphicDesign/GraphicDesign";
import Locations from "pages/Locations/Locations";
import WebDesign from "pages/WebDesign/WebDesign";
import Layout from "components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/app-design",
          element: <AppDesign />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/graphic-design",
          element: <GraphicDesign />,
        },
        {
          path: "/locations",
          element: <Locations />,
        },
        {
          path: "/web-design",
          element: <WebDesign />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
