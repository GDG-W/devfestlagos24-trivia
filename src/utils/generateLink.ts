
export const generateLink = (
    platform: "facebook" | "instagram" | "twitter" | "telegram" | "whatsapp",
    text: string
  ) => {
    switch (platform) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          text
        )}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}`;
      case "telegram":
        return `https://t.me/share/url?url=${encodeURIComponent(text)}`;
      case "whatsapp":
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      default:
        return "";
      }
    };