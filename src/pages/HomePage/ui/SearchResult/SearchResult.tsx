import React, { useState } from "react";
import SmallCharacterCard from "../../../../shared/ui/SmallCharacterCard/SmallCharacterCard";
import type { Character } from "../../../../utils/types";
import ArrowButton from "../../../../shared/ui/Button/ArrowButton";

interface SearchResultProps {
  characters?: Character[];
}

const SearchResult: React.FC<SearchResultProps> = ({ characters }) => {
    const [prevPage, setPrevPage] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<string>('1');
    const [nextPage, setNextPage] = useState<string>('');
  return (
    <div className="flex flex-col border border-solid border-white h-64 rounded-xs overflow-auto gap-5 p-5">
      {characters?.length == 0 && <h3 className="text-gray-400">Ничего не найдено</h3>}
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
        <ArrowButton text="<" onClick={()=>{}}/>
        <h3 className="">{currentPage}</h3>
        <ArrowButton text=">" onClick={()=>{}}/>
        </div>
    </div>
  );
};

export default SearchResult;
