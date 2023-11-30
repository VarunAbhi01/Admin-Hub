
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import "./styles/global.scss"
import User from "./pages/user/User";
import Product from "./pages/product/Product";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// to enaable react query features throughout the app
// ract query is used to fetch,update,delete data in react app
const queryClient = new QueryClient();

function App() {

  //since navbar at top,menu at left,footer at bottom are common in all pages we will create a common layout and use it for all pages
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />

        {/* these are 2 containers one is menu at left which has content and the other is the container that holds the content which is at centre displaying users info */}
        <div className="container">
            <div className="menuContainer">
              <Menu />
            </div>

            <div className="contentContainer">
{/* outlet is the place where the matched data with router will be rendered like our main content  */}
{/* react query developed by tanstack is used to fetch and send data like API, so we wrapped it around our main content */}
              <QueryClientProvider client={queryClient}>
                <Outlet />
              </QueryClientProvider>
            </div>
        </div>

        <Footer />
      </div>
    );
  };



  const router = createBrowserRouter([
    {
      // this is our home page where all these must be displayed together so we created a common layout in which they will be displayed as children of layout, since we need login not to be displayed with tese we seperately mention it other than in children so it displays seperately
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;