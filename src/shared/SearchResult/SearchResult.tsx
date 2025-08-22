import React from "react"
import type { Character } from "../../utils/types";
import SmallCharacterCard from "../ui/SmallCharacterCard/SmallCharacterCard";

interface SearchResultProps{
    characters?: Character[];
}


const SearchResult: React.FC<SearchResultProps> = (({characters})=>{
    return(
        <div className="flex flex-col border border-solid border-white h-64 rounded-xs overflow-auto gap-5 p-5">
            {characters && characters.map((item)=>(
                <SmallCharacterCard characterImg={item.image} characterName={item.name} characterSpeices={item.species} characterStatus={item.status} key={item.id}/>
            ))}
        </div>
    )
})


export default SearchResult;