export const colorForGender = (gender: string) => {
  if (gender === "Male") return "text-sky-400";
  if (gender === "Female") return "text-pink-400";
  if (gender === "Genderless") return "text-gray-400";
  if (gender === "Unknown") return "text-orange-600";
  return "";
};

export const colorForSpecies = (species: string | undefined) => {
  switch (species) {
    case "Human":
      return "text-emerald-700";
      break;
    case "Alien":
      return "text-purple-600";
      break;
    case "Humanoid":
      return "text-green-500";
      break;
    case "unknown":
      return "text-gray-500";
      break;
    case "Poopybutthole":
      return "text-amber-500";
      break;
    case "Mythological Creature":
      return "text-purple-800";
      break;
    case "Animal":
      return "text-green-400";
      break;
    case "Robot":
      return "text-gray-300";
      break;
    case "Cronenberg":
      return "text-amber-800";
      break;
    case "Disease":
      return "text-yellow-500";
      break;
    default:
      return "";
      break;
  }
};