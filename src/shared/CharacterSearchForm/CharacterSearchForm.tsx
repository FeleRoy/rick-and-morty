import React from "react";
import Input from "../ui/Input/Input";
import DropDown from "../ui/DropDown/DropDown";

interface CharacterSearchFormProps {}

const CharacterSearchForm: React.FC<CharacterSearchFormProps> = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Имя персонажа"
        onChange={() => {}}
        inputId="name"
        placeholder="Введите имя персонажа"
      />
      <fieldset className="flex justify-between">
        <DropDown title={"Жив?"} options={["Жив", "Мёртв", "Неизвестно"]} onSelect={()=>{}}></DropDown>
        <DropDown title={"Раса?"} options={["ЗАПОЛНИТЬ", "РАСЫ"]} onSelect={()=>{}}></DropDown>
      </fieldset>
      <Input
        label="Эпизод"
        onChange={() => {}}
        inputId="episode"
        placeholder="Введите название эпизода"
      />
    </form>
  );
};

export default CharacterSearchForm;
