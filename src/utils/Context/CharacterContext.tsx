import React, { createContext, useContext, useState } from "react";

type CharacterContextType = {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <CharacterContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const ctx = useContext(CharacterContext);
  if (!ctx) throw new Error("useCharacterContext должен использоваться внутри CharacterProvider");
  return ctx;
};
