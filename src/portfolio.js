import React from "react";
import "./portfolio.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Portheader from "./components/Portheader";
import Body from "./components/Body";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <>
      <Portheader />
      {/* Outlet is where child routes will render */}
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,   // ✅ default page at "/"
        element: <Body />
      },
      {
        path: "about", // ✅ relative, not "/About"
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
