import React, { useEffect, useState } from "react";

type optionsType = {ru:string, eng: string}

type DropDownProps = {
  title: string;
  options: optionsType[];
  onSelect: (value: string) => void;
  storageValue?: string;
};

const DropDown: React.FC<DropDownProps> = ({ title, options, onSelect, storageValue }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setValue(selected);
    onSelect(selected);
  };

  useEffect(() => {
    if (storageValue !== undefined) {
      setValue(storageValue);
    }
  }, [storageValue]);

  return (
    <div className="flex flex-col gap-1 grow">
      <label>{title}</label>
      <select
        value={value}
        onChange={handleChange}
        className="p-1 border rounded-lg"
      >
        <option className="bg-black" value="">
          -- выберите вариант --
        </option>
        {options.map((opt) => (
          <option className="bg-black" key={opt.eng} value={opt.eng}>
            {opt.ru}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
