import type React from "react";



const character = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}

const colorForGender = (gender: string)=>{
  if(gender === "Male") return "text-sky-400"
  if(gender === "Female") return "text-pink-400"
  if(gender === "Genderless") return "text-gray-400"
  if(gender === "Unknown") return "text-orange-600"
  return ''
}

interface CharacterInfoSectionProps {}

const CharacterInfoSection: React.FC<CharacterInfoSectionProps> = ({}) => {
  return (
    <div className="border border-solid max-w-2xl mx-auto p-3 rounded-3xl flex flex-col items-center">
      <div className="flex gap-2 max-sm:flex-col">
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
      </div>
    </div>
  );
};

export default CharacterInfoSection