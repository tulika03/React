import React from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import About from "./components/about/about";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './components/error/Error'
import Contact from "./components/contact/Contact";
import ResMenu from "./components/ResMenu/ResMenu";



const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      {/* if path is / then load body else if path is /about the About component and so on */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Content />
      },
      {
        path: "/home",
        element: <Content />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />
      }
    ]
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

// It is used to render react element
root.render(<RouterProvider router={appRouter}></RouterProvider>);
