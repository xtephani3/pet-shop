import { Button } from "../Button/Button"
import Paw from "../../assets/svg/Paw.svg"


export function Hero(){
    return(
        <div className="px-[35px]">

        <div className="bg-[url('/homebg.png')] h-[729.48px] bg-no-repeat ">
          <div className="flex w-full px-[15px]">

            <div className="pt-[150px] w-1/2 ">
            <div className="flex flex-col gap-[10px]">
              <p className="flex gap-[5px] items-center">
                <img src={Paw} />
                <span className="text-[15px] font-semibold">Natural Pet Products</span>
              </p>
              <h2 className="font-semibold text-[70px] leading-[70px]">the Best Products for Your Pets!</h2>
              <p className="pb-[10px]">
                Very best, highest quality organic ingredients to<br />
                produce our own range of 100% natural pet
                products.</p>
                </div>
              <Button variant="primary" size="md" background="priColor">Explore Products</Button>
              <div className="flex gap-[10px] pt-[30px]">
                <img src="/slide1.png" />
                <img src="/slide2.png" />
                <img src="/slide3.png" />
              </div>
            </div>

            <div className="w-1/2 bg-[#E6D445] rounded-[100px] pt-[100px] mt-[50px]">
              <img src="/homeanimals.png" />
            </div>
          </div>
        </div>
      </div>

        
    )
}