import { colorForSpecies } from "../../../utils/Colors/Colors";
import { useCharacterContext } from "../../../utils/Context/CharacterContext";

interface SmallCharacterCardProps {
  characterName?: string;
  characterStatus?: string;
  characterSpeices?: string;
  characterImg?: string;
  characterId: number;
}

const SmallCharacterCard: React.FC<SmallCharacterCardProps> = ({
  characterName,
  characterStatus,
  characterSpeices,
  characterImg, 
  characterId,
}) => {

  const { setSelectedId } = useCharacterContext();

  const handleClick = () => {
    setSelectedId(characterId)
  }
  return (
    <>
      <div onClick={handleClick} id={characterId.toString()} className="flex p-2 gap-5 border justify-between items-center border-solid border-white rounded-lg cursor-pointer">
        <img
          src={characterImg}
          className="size-14"
          alt={characterName}
        ></img>
        <div className="flex flex-row justify-evenly items-center grow max-sm:flex-col">
          <h3>{characterName}</h3>
          <h3
            className={`${characterStatus === "Alive" ? "text-blue-600" : "text-red-600"}`}
          >
            {characterStatus}
          </h3>
          <h3
            className={colorForSpecies(characterSpeices)}
          >
            {characterSpeices}
          </h3>
        </div>
      </div>
    </>
  );
};

export default SmallCharacterCard;
