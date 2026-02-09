import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import News from "../pages/news/News";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/not-found/NotFound";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <NotFound />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "services", element: <Services /> },
                { path: "news", element: <News /> },
                { path: "contact", element: <Contact /> },
            ],
        },

    ]

);
