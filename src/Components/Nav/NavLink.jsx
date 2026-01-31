import { NavLink } from "react-router-dom"

export function NavLinks() {
    return (
        <div className="flex gap-[30px]">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About-us'>About-us</NavLink>
            <NavLink to='/Services'>Services</NavLink>
            <NavLink to='/Pages'>Pages</NavLink>
            <NavLink to='/Blog'>Blog</NavLink>
            <NavLink to='/Contact-us'>Contact-us</NavLink>
        </div>
    )
}