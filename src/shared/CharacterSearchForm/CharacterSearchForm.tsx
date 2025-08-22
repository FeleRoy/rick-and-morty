import React from "react";
import Input from "../ui/Input/Input";
import DropDown from "../ui/DropDown/DropDown";

interface CharacterSearchFormProps {}

const CharacterSearchForm: React.FC<CharacterSearchFormProps> = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <Input
        label="Имя персонажа"
        onChange={() => {}}
        inputId="name"
        placeholder="Введите имя персонажа"
      />
      <fieldset className="flex justify-between mb-3 justify-items-stretch gap-3 max-sm:flex-col">
        <DropDown
          title={"Жив?"}
          options={[{ru:"Жив", eng: "Alive"}, {ru:"Мёртв", eng: "DeaD"}, {ru:"Неизвестно", eng: "unknown"}]}
          onSelect={() => {}}
        ></DropDown>
        <DropDown
          title={"Раса?"}
          options={[
            {ru:"Человек", eng: "Human"},
            {ru:"Пришелец", eng: "Alien"},
            {ru:"Гуманойд", eng: "Humanoid"},
            {ru:"Неизвестно", eng: "unknown"},
            {ru:"Жопосранчик", eng: "Poopybutthole"},
            {ru:"Мифическое создание", eng: "Mythological Creature"},
            {ru:"Животное", eng: "Animal"},
            {ru:"Робот", eng: "Robot"},
            {ru:"Кроненберг", eng: "Cronenberg"},
            {ru:"Болезнь", eng: "Disease"}
          ]}
          onSelect={() => {}}
        ></DropDown>
      </fieldset>
      <Input
        label="Эпизод"
        onChange={() => {}}
        inputId="episode"
        placeholder="Введите номер эпизода"
      />
    </form>
  );
};

export default CharacterSearchForm;
