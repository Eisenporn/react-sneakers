import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/Root";

// Другие страницы

const HomePage = React.lazy(() => import("../pages/HomePage"));
const FavoritePgae = React.lazy(() => import("../pages/FavoritePage"));
const OrderPage = React.lazy(() => import("../pages/orderPage"));

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                index: true,
            },
            {
                path: '/orders',
                element: <OrderPage />
            },
            {
                path: '/favorites',
                element: <FavoritePgae />
            },
        ]
    }
]);

export default Router