import CharacterInfoSection from "./ui/CharacterInfoSection/CharacterInfoSection"
import CharacterSearchSection from "./ui/CharacterSearchSection/CharacterSearchSection"


function HomePage() {
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
