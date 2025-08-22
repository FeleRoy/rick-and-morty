import type React from "react";
import CharacterInfoSection from "./ui/CharacterInfoSection/CharacterInfoSection"
import CharacterSearchSection from "./ui/CharacterSearchSection/CharacterSearchSection"


interface HomePageProps {}


const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <>
    <div className="p-5">
      <CharacterSearchSection/>
      <CharacterInfoSection/>
    </div>
    </>
  )
}

export default HomePage
