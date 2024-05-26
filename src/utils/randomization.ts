import { ITile } from "../components/Game/Game";

export const RandomizeData = (data: ITile[]): ITile[] => {
  // Copy the array to avoid modifying the original one
  const shuffledData = [...data];

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData;
};
