import { Route, Routes } from "react-router-dom";
import { Home } from '../Pages/Home';
import { About } from "../Pages/About";
import { Services } from "../Pages/Services";
import { Pages } from "../Pages/Pages";
import { Contact } from "../Pages/Contact";
import { Blog } from "../Pages/Blog";
import { SignUp } from '../Pages/Auth/Signup';
import { Login } from "../Pages/Auth/Login";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}