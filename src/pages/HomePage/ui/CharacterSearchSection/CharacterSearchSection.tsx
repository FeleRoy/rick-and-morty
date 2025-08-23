import React, { useEffect, useState } from "react";
import CharacterSearchForm from "../CharacterSearchForm/CharacterSearchForm";
import type { Character, CharacterFilter } from "../../../../utils/types";
import { getCharacters } from "../../../../utils/Api";
import SearchResult, { type pagesInfoType } from "../SearchResult/SearchResult";

interface CharacterSearchSectionProps {}

const CharacterSearchSection: React.FC<CharacterSearchSectionProps> = ({}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pageInfo, setPageInfo] = useState<pagesInfoType>({
    prevPage: null,
    nextPage: null,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<CharacterFilter>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFormChange = (data: CharacterFilter) => {
    setFilters(data);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCharacters([]);
    setIsLoading(true);
    const dataWithPage = { ...filters, page: currentPage };
    getCharacters(dataWithPage)
      .then((response) => {
        setPageInfo({
          prevPage: response.info.prev,
          nextPage: response.info.next,
        });
        setCharacters(response.results);
      })
      .catch((error) => {
        setCharacters([]);
        console.error("Ошибка запроса персонажей:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, filters]);

  return (
    <div className="border border-solid max-w-2xl mx-auto p-3 rounded-3xl flex flex-col mb-5">
      <h1 className="text-3xl mb-4">Вселенная Рик и Морти</h1>
      <CharacterSearchForm onChange={handleFormChange} />
      <h2 className="text-2xl my-4">Найдено</h2>
      <SearchResult
        pageInfo={pageInfo}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        characters={characters}
        isLoading={isLoading}
      />
    </div>
  );
};

export default CharacterSearchSection;
