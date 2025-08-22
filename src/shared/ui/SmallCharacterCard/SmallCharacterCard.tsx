interface SmallCharacterCardProps {
  characterName?: string;
  characterStatus?: string;
  characterSpeices?: string;
  characterImg?: string;
}

const SmallCharacterCard: React.FC<SmallCharacterCardProps> = ({
  characterName,
  characterStatus,
  characterSpeices,
  characterImg
}) => {
  return (
    <>
      <div className="flex p-2 gap-5 border justify-between items-center border-solid border-white rounded-lg cursor-pointer">
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
            className={`${characterSpeices === "Human" ? "text-emerald-700" : "text-purple-500"}`}
          >
            {characterSpeices}
          </h3>
        </div>
      </div>
    </>
  );
};

export default SmallCharacterCard;
