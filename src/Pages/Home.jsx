import { Nav } from "../Components/Nav/Nav"
import { Button } from "../Components/Button/Button"
import Paw  from "../assets/svg/Paw.svg"

export function Home() {
  return (
    <>
      <Nav />
      <div className="px-[35px]">

        <div className="bg-[url('/homebg.png')] h-[600px] bg-no-repeat ">
        <div className="flex w-full px-[15px]">

          <div className="pt-[150px] w-1/2">
            <p className="font-bold flex gap-[5px] items-center">
              <img src={Paw}/>
              <span>Natural Pet Products</span>
               </p>
            <h2 className="font-semibold text-[60px]">the Best Products for Your Pets!</h2>
            <p className="pb-[10px]">
              Very best, highest quality organic ingredients to<br/>
              produce our own range of 100% natural pet
              products.</p>
            <Button variant="primary" size="md" background="priColor">Explore Products</Button>
          </div>

          <div className="w-1/2 bg-[#E6D445] rounded-[100px] pt-[100px] mt-[50px]">
          <img src="/homeanimals.png" />
        </div>
        </div>

        </div>

        

      </div>

    </>



  )
}