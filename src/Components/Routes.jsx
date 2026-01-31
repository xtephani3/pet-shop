import { Route, Routes } from "react-router-dom";
import { Home } from '../Pages/Home';
import { About } from "../Pages/About";
import { Services } from "../Pages/Services";
import { Pages } from "../Pages/Pages";
import { Contact } from "../Pages/Contact";
import { Blog } from "../Pages/Blog";
import { SignUp } from '../Pages/Signup';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About-us" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact-us" element={<Contact />} />
            <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    )
}