export const formatSeconds = (seconds: number): string => {
  const minutes: number = Math.floor(seconds / 60);
  const remainingSeconds: number = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};
