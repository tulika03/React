import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import About from "./components/about/about";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './components/error/Error'
import Contact from "./components/contact/Contact";
import ResMenu from "./components/ResMenu/ResMenu";
import useOnlineStatus from "../hooks/useOnlineStatus"
import Login from "./components/login/Login";
import ShimmerUI from "./components/content/shimmer";
import Cart from "./components/cart/cart"
import Loading from "./components/Loading";
import UserContext from "../context/UserContext";
import {Provider} from "react-redux";
import appStore from "../store/appStore";
import StickyNav from "./components/header/stickyNav";
import SearchMenu from "./components/ResMenu/searchMenu";
const About = lazy(() => import("./components/about/about"));

const AppComponent = () => {
  const [loading, setLoading] = useState(true);
  const [userName, setUsername] = useState("")
    useEffect(() => {
      const data = {
        name: "User"
      };

      setUsername(data.name);
      setTimeout(() => setLoading(false), 1000);
    }, [])
    

  const onlineStatus = useOnlineStatus();
  // if(loading)
  //   return <ShimmerUI />

  if(onlineStatus === false)
    return <h1>Looks like you are offline. Please check your internet connection</h1>

  return (
    <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser: userName, setUsername}}>
    <div className="app">
      <Header />
      {/* if path is / then load body else if path is /about the About component and so on */}
      
      <StickyNav />
      <Outlet />

    </div>
    </UserContext.Provider>
    </Provider>

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
        path: "/cart",
        element: <Cart />
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
        path: "/search",
        element: <SearchMenu />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

// It is used to render react element
root.render(<RouterProvider router={appRouter}></RouterProvider>);
