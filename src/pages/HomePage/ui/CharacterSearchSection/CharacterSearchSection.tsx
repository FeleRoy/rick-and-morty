import React, { useState } from "react";
import CharacterSearchForm from "../CharacterSearchForm/CharacterSearchForm";
import type { Character, CharacterFilter } from "../../../../utils/types";
import { getCharacters } from "../../../../utils/Api";
import SearchResult, { type pagesInfoType } from "../SearchResult/SearchResult";

interface CharacterSearchSectionProps {}

const CharacterSearchSection: React.FC<CharacterSearchSectionProps> = ({}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pageInfo, setPageInfo] = useState<pagesInfoType>({
    prevPage: null,
    currentPage: "1",
    nextPage: null,
  });
  const handleFormChange = (data: CharacterFilter) => {
    // TODO: реализовать подгрузку элементов с других страниц
    getCharacters(data)
      .then((response) => {
        setPageInfo({...pageInfo, prevPage: response.info.prev, nextPage: response.info.next})
        setCharacters(response.results);
      })
      .catch((error) => {
        setCharacters([]);
        console.error("Ошибка запроса персонажей:", error);
      });
  };
  return (
    <div className="border border-solid max-w-2xl mx-auto p-3 rounded-3xl flex flex-col mb-5">
      <h1 className="text-3xl mb-4">Вселенная Рик и Морти</h1>
      <CharacterSearchForm onChange={handleFormChange} />
      <h2 className="text-2xl my-4">Найдено</h2>
      <SearchResult pageInfo={pageInfo} characters={characters} />
    </div>
  );
};

export default CharacterSearchSection;
