import React from "react";
import SmallCharacterCard from "../../../../shared/ui/SmallCharacterCard/SmallCharacterCard";
import type { Character } from "../../../../utils/types";
import ArrowButton from "../../../../shared/ui/Button/ArrowButton";

export type pagesInfoType = {
  prevPage: string | null;
  currentPage: string | null;
  nextPage: string | null;
};

interface SearchResultProps {
  characters?: Character[];
  pageInfo: pagesInfoType;
}



const SearchResult: React.FC<SearchResultProps> = ({ characters, pageInfo = {
    prevPage: null,
    currentPage: null,
    nextPage: null,
  } }) => {
  return (
    <div className="flex flex-col border border-solid border-white h-64 rounded-xs overflow-auto gap-5 p-5">
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
        <ArrowButton isDisabled={pageInfo.prevPage === null} text="<" onClick={() => {}} />
        <h3 className="">{pageInfo.currentPage}</h3>
        <ArrowButton isDisabled={pageInfo.nextPage === null} text=">" onClick={() => {}} />
      </div>
    </div>
  );
};

export default SearchResult;
