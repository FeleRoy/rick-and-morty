import type React from "react";
import type { Character } from "../../../../utils/types";
import { useCharacterContext } from "../../../../utils/Context/CharacterContext";
import { useEffect, useRef, useState } from "react";
import { getCharacterById } from "../../../../utils/Api";
import Button from "../../../../shared/ui/Button/Button";
import { colorForGender, colorForSpecies } from "../../../../utils/Colors/Colors";

interface CharacterInfoSectionProps {}

const CharacterInfoSection: React.FC<CharacterInfoSectionProps> = ({}) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const { selectedId, setSelectedId } = useCharacterContext();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const saved = localStorage.getItem("selectedId");
    if (saved && saved !== "null") {
      setSelectedId(Number(saved));
      getCharacterById(saved.toString()).then((data) => {
        setCharacter(data);
      });
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (selectedId) {
      localStorage.setItem("selectedId", JSON.stringify(selectedId));
      getCharacterById(selectedId?.toString()).then((data) => {
        setCharacter(data);
      });
    } else {
      localStorage.setItem("selectedId", JSON.stringify(null));
      setCharacter(null);
    }
  }, [selectedId]);

  const handleClose = () => {
    setSelectedId(null);
    localStorage.setItem("selectedId", JSON.stringify(null));
  };
  return (
    <div className="border border-solid max-w-2xl mx-auto p-3 rounded-3xl flex flex-col items-center">
      <div className="flex gap-2 max-sm:flex-col">
        {!character && <h2>Выберите персонажа</h2>}
        {character && (
          <>
            <img
              src={character.image}
              alt={character.name}
              className="size-40"
            />
            <div className="flex flex-col gap-0.5">
              <h2 className="text-2xl">{character.name}</h2>
              <h2>
                Status:{" "}
                <span
                  className={`${
                    character.status === "Alive"
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {character.status}
                </span>
              </h2>
              <h2>
                Species:{" "}
                <span
                  className={colorForSpecies(character.species)}
                >
                  {character.species}
                </span>
              </h2>
              <h2>Type: {character.type || "—"}</h2>
              <h2>Number of episodes: {character.episode.length}</h2>
              <h1>
                Gender:{" "}
                <span className={`${colorForGender(character.gender)}`}>
                  {character.gender}
                </span>
              </h1>
              <h2>Origin: {character.origin.name}</h2>
              <h2>Location: {character.location.name}</h2>
              <Button onClick={handleClose} text="закрыть" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterInfoSection;
