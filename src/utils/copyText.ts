
export const CopyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Success message (optional)
        // console.log("copied text")
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  