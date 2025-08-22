import React from "react";
import CharacterSearchForm from "../CharacterSearchForm/CharacterSearchForm";
import SearchResult from "../SearchResult/SearchResult";
import SmallCharacterCard from "../ui/SmallCharacterCard/SmallCharacterCard";

interface CharacterSearchSectionProps {}


const CharacterSearchSection: React.FC<CharacterSearchSectionProps> = ({}) =>{
    return(
        <div className="border border-solid max-w-2xl mx-auto p-3 rounded-3xl flex flex-col">
            <h1 className="text-3xl mb-4">Вселенная Рик и Морти</h1>
            <CharacterSearchForm/>
            <h2 className="text-2xl my-4">Найдено</h2>
            <SmallCharacterCard characterName="Abradolf Lincler" characterSpeices="Human" characterStatus="Alive"/>
            <SmallCharacterCard characterName="Abradolf Lincler" characterSpeices="Human" characterStatus="Alive"/>
            <SmallCharacterCard characterName="Abradolf Lincler" characterSpeices="Human" characterStatus="Alive"/>
        </div>
    );
}

export default CharacterSearchSection;