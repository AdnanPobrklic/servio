import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./assets/pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
        path: "*",
        element: (
            <h1>
                Not found go back to <Link to="/">Home</Link>
            </h1>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
