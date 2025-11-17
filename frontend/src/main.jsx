import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";
import Home from "./assets/pages/Home.jsx";
import Login from "./assets/pages/Login.jsx";
import Register from "./assets/pages/Register.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/prijava", element: <Login /> },
    { path: "/registracija", element: <Register /> },
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
