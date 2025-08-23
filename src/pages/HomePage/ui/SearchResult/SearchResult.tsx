import React from "react";
import SmallCharacterCard from "../../../../shared/ui/SmallCharacterCard/SmallCharacterCard";
import type { Character } from "../../../../utils/types";
import ArrowButton from "../../../../shared/ui/Button/ArrowButton";
import Preloader from "../../../../shared/ui/Preloader/Preloader";

export type pagesInfoType = {
  prevPage: string | null;
  nextPage: string | null;
};

interface SearchResultProps {
  characters?: Character[];
  pageInfo: pagesInfoType;
  currentPage?: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  isLoading: boolean;
}

const SearchResult: React.FC<SearchResultProps> = ({
  characters,
  pageInfo = {
    prevPage: null,
    nextPage: null,
  },
  currentPage,
  handlePrevPage,
  handleNextPage,
  isLoading,
}) => {
  return (
    <div className="flex flex-col border border-solid border-white h-64 rounded-xs overflow-auto gap-5 p-5">
      {isLoading && (
        <div className="flex justify-center items-center my-4">
          <Preloader />
          <span className="ml-3">Загрузка...</span>
        </div>
      )}
      {characters?.length == 0 && (
        <h3 className="text-gray-400">Ничего не найдено</h3>
      )}
      {characters &&
        characters.map((item) => (
          <SmallCharacterCard
            characterImg={item.image}
            characterName={item.name}
            characterSpeices={item.species}
            characterStatus={item.status}
            characterId={item.id}
            key={item.id}
          />
        ))}
      <div className="flex justify-between items-center mt-auto">
        <ArrowButton
          isDisabled={pageInfo.prevPage === null}
          text="<"
          onClick={handlePrevPage}
        />
        <h3 className="">{currentPage}</h3>
        <ArrowButton
          isDisabled={pageInfo.nextPage === null}
          text=">"
          onClick={handleNextPage}
        />
      </div>
    </div>
  );
};

export default SearchResult;
