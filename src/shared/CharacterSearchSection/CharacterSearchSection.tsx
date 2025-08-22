import React from "react";
import CharacterSearchForm from "../CharacterSearchForm/CharacterSearchForm";
import SearchResult from "../SearchResult/SearchResult";
import type { Character, CharacterFilter } from "../../utils/types";
import { getCharacters } from "../../utils/Api";


interface CharacterSearchSectionProps {}


const CharacterSearchSection: React.FC<CharacterSearchSectionProps> = ({}) =>{
      const [characters, setCharacters] = React.useState<Character[]>([])

      const handleFormChange = (data: CharacterFilter)=>{
        console.log(data);
        // TODO: реализовать подгрузку элементов с других страниц
        getCharacters(data)
          .then(characters => {
            setCharacters(characters);
            console.log(characters);
          })
          .catch(error => {
            console.error('Ошибка запроса персонажей:', error);
          });
      }
    return(
        <div className="border border-solid max-w-2xl mx-auto p-3 rounded-3xl flex flex-col mb-5">
            <h1 className="text-3xl mb-4">Вселенная Рик и Морти</h1>
            <CharacterSearchForm onChange={handleFormChange}/>
            <h2 className="text-2xl my-4">Найдено</h2>
            <SearchResult characters={characters}/>
        </div>
    );
}

export default CharacterSearchSection;