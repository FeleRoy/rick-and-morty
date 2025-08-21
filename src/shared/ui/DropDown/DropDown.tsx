import React, { useState } from "react";

type DropDownProps = {
  title: string;
  options: string[];
  onSelect: (value: string) => void;
};

const DropDown: React.FC<DropDownProps> = ({ title, options, onSelect }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setValue(selected);
    onSelect(selected);
  };

  return (
    <div className="flex flex-col gap-1">
      <label>{title}</label>
      <select
        value={value}
        onChange={handleChange}
        className="p-1 border rounded-lg"
      >
        <option className="bg-black" value="" disabled>
          -- выберите вариант --
        </option>
        {options.map((opt) => (
          <option className="bg-black" key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
