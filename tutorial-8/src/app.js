import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import About from "./components/about/about";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './components/error/Error'
import Contact from "./components/contact/Contact";
import ResMenu from "./components/ResMenu/ResMenu";
import useOnlineStatus from "../utils/useOnlineStatus"
import Login from "./components/login/Login";
import ShimmerUI from "./components/content/shimmer";

const About = lazy(() => import("./components/about/about"));
const Grocery = lazy(() => import("./components/grocery/Grocery"));

const AppComponent = () => {

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
    return <h1>Looks like you are offline. Please check your internet connection</h1>

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
        element: <Suspense fallback={<ShimmerUI></ShimmerUI>}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<ShimmerUI></ShimmerUI>}><Grocery /></Suspense>
      }
    ]
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

// It is used to render react element
root.render(<RouterProvider router={appRouter}></RouterProvider>);
