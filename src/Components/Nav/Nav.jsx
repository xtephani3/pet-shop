import { NavHeader } from "./NavHeader"
import BabetLogo from '../../assets/svg/BabetLogo.svg';
import { NavLinks } from "./NavLink";
import { Button } from "../Button/Button";

export function Nav() {
    return (
        <>
            <NavHeader />
            <div className="flex items-center justify-between px-[85px] py-[10px]">
                <img src={BabetLogo} />
                <NavLinks/> 
                <div className="flex items-center gap-[10px] ">
                    <img src="/cart.png"/>
                     <img src="/heart.png"/>
                     <Button variant="primary" size="lg" background="priColor">Call us: +(120) 3456 789</Button>
                </div>
            </div>

        </>
    )
}