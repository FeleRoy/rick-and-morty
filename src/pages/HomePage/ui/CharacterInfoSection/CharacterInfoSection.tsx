import type React from "react";
import type { Character } from "../../../../utils/types";
import { useCharacterContext } from "../../../../utils/Context/CharacterContext";
import { useEffect, useState } from "react";
import { getCharacterById } from "../../../../utils/Api";

const colorForGender = (gender: string)=>{
  if(gender === "Male") return "text-sky-400"
  if(gender === "Female") return "text-pink-400"
  if(gender === "Genderless") return "text-gray-400"
  if(gender === "Unknown") return "text-orange-600"
  return ''
}

interface CharacterInfoSectionProps {}

const CharacterInfoSection: React.FC<CharacterInfoSectionProps> = ({}) => {
  const [character, setCharacter] = useState<Character | null>(null)
  const { selectedId } = useCharacterContext();

  useEffect(() => {
    if (selectedId) {
      getCharacterById(selectedId?.toString()).then((data)=>{
        setCharacter(data);
      })
    }
  }, [selectedId]);
  if (!character) { <h2>Выберите персонажа</h2>}
  return (
    <div className="border border-solid max-w-2xl mx-auto p-3 rounded-3xl flex flex-col items-center">
      <div className="flex gap-2 max-sm:flex-col">
        {!character && <h2>Выберите персонажа</h2>}
        { character && (<>
        <img src={character.image} alt={character.name} className="size-40" />
        <div className="flex flex-col gap-0.5">
        <h2 className="text-2xl">{character.name}</h2>
        <h2>Status: <span className={`${character.status === "Alive" ? "text-blue-600" : "text-red-600"}`}>{character.status}</span></h2>
        <h2>Species: <span className={`${character.species === "Human" ? "text-emerald-700" : "text-purple-500"}`}>{character.species}</span></h2>
        <h2>Type: {character.type || "—"}</h2>
        <h1>Gender: <span className={`${colorForGender(character.gender)}`}>{character.gender}</span></h1>
        <h2>Origin: {character.origin.name}</h2>
        <h2>Location: {character.location.name}</h2>
        </div>
        </>
        )}
      </div>
    </div>
  );
};

export default CharacterInfoSection