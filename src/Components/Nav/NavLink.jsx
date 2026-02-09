import { NavLink } from "react-router-dom"

export function NavLinks() {
    return (
        <div className="flex gap-[30px]">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about-us'>About-us</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/pages'>Pages</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/contact-us'>Contact-us</NavLink>
        </div>
    )
}