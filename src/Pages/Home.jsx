import { Nav } from "../Components/Nav/Nav"
import { Hero } from "../Components/Home/Hero"
import { HomePetsAvailable } from "../Components/Home/PetsAvailable"
import { OurStory } from "../Components/Home/OurStory"



export function Home() {
  return (
    <>
      <Nav />
      <Hero/>
      <HomePetsAvailable/>
      <OurStory/>
      
    </>



  )
}