import { createHashRouter, HashRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import AboutMe from "./pages/AboutMe.jsx";
import Layout from "./components/Layout.jsx";
import MyProjects from "./pages/MyProjects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Tools from "./pages/Tools.jsx";
import {FigmaShowcase} from "./pages/FigmaShowcase.jsx";

const router = createHashRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <AboutMe/>
            },
            {
                path: "/my-projects",
                element: <MyProjects/>
            },
            {
                path: "/skills",
                element: <Skills/>
            },
            {
                path: "/tools",
                element: <Tools/>
            },
            {
                path: "/figma-showcase",
                element: <FigmaShowcase/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },

        ]


    }
], )
export default function App() {

    return (

            <RouterProvider router={router} />

    )
}

