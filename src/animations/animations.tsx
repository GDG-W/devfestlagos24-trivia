export const textVariant = {
  initial: {
    opacity: 0,
    y: -20,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  final2: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.6,
    },
  },
  final3: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};
export const leaderboardVariant = {
  initial: {
    opacity: 0,
    y: -20,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 1,
    y: -20,
    transition: {
      duration: 0.25,
    },
  },
};

export const parentVariants = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.5, // Adjust the delay between children animations
    },
  },
};
export const SlideinAnime = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  final: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const leftVariant = {
  initial: {
    opacity: 0,
    x: -100,
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  final2: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.125,
      duration: 0.5,
    },
  },
  final3: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
    },
  },
};
export const rowVariant = {
  initial: {
    opacity: 0,
    x: -100,
  },
  final: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.5, // Set the delay based on the index
    },
  }),
};
