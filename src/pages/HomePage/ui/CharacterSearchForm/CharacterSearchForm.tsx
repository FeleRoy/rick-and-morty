import React, { useEffect } from "react";
import Input from "../../../../shared/ui/Input/Input";
import type { CharacterFilter } from "../../../../utils/types";
import DropDown from "../../../../shared/ui/DropDown/DropDown";


interface CharacterSearchFormProps {
  onChange: (data: CharacterFilter) => void;
}

const CharacterSearchForm: React.FC<CharacterSearchFormProps> = ({
  onChange,
}) => {
  const [formData, setFormData] = React.useState({
    name: "",
    status: "",
    species: "",
    episode: "",
  });

  useEffect(() => {
    onChange(formData)
  }, [formData]);

  return (
    <form className="flex flex-col gap-1">
      <Input
        label="Имя персонажа"
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
        inputId="name"
        placeholder="Введите имя персонажа"
      />
      <fieldset className="flex justify-between mb-3 justify-items-stretch gap-3 max-sm:flex-col">
        <DropDown
          title={"Жив?"}
          options={[
            { ru: "Жив", eng: "Alive" },
            { ru: "Мёртв", eng: "Dead" },
            { ru: "Неизвестно", eng: "unknown" },
          ]}
          onSelect={(selected) => {
            setFormData({ ...formData, status: selected });
          }}
        ></DropDown>
        <DropDown
          title={"Раса?"}
          options={[
            { ru: "Человек", eng: "Human" },
            { ru: "Пришелец", eng: "Alien" },
            { ru: "Гуманойд", eng: "Humanoid" },
            { ru: "Неизвестно", eng: "unknown" },
            { ru: "Жопосранчик", eng: "Poopybutthole" },
            { ru: "Мифическое создание", eng: "Mythological Creature" },
            { ru: "Животное", eng: "Animal" },
            { ru: "Робот", eng: "Robot" },
            { ru: "Кроненберг", eng: "Cronenberg" },
            { ru: "Болезнь", eng: "Disease" },
          ]}
          onSelect={(selected) => {
            setFormData({ ...formData, species: selected });
          }}
        ></DropDown>
      </fieldset>
      <Input
        label="Эпизод"
        onChange={(e) => {
          setFormData({ ...formData, episode: e.target.value });
        }}
        inputId="episode"
        placeholder="Введите номер эпизода"
      />
    </form>
  );
};

export default CharacterSearchForm;
