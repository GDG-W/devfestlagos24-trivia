export const truncateString = (str: string | undefined, maxLength: number) => {
  if (str) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + "...";
    }
  } else {
    return "";
  }
};

export const capitalizeFirstLetter = (word: string | undefined): string => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
