import { useEffect, useState } from "react";
import {
  FlexModalStyles,
  InfoModalStyle,
  LayoutStyles,
  LogoStyles,
  PageButtonStyle,
} from "./Styles";
import { IPageButton, PageButtons } from "./constants";
import { AnimatePresence, motion } from "framer-motion";
import { GamePage } from "../Game/Game";
import { LeaderboardPage } from "../Leaderboard/Index";
import { CancelIcon, CopyIcon, ShareIcon } from "../Icons/Game";
import {
  contVariant,
  leaderboardVariant,
  textVariant,
} from "../../animations/animations";
import { DownloadIcon, WhatsappIcon, XIcon } from "../Icons/Socials";
import { CopyToClipboard } from "../../utils/copyText";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setGameStart,
  setHasCanceledGame,
  userSelector,
} from "../../redux/userSlice";
import { WEBSITE_URL } from "../../libs/config";
import { formatSeconds, formatSecondsForPost } from "../../utils/formatTime";
import { generateLink } from "../../utils/generateLink";

export const LogoComp = () => {
  return (
    <LogoStyles>
      <div className="desktop">
        <img src="/assets/logo.svg" alt="logo image" className="" />
      </div>
      <div className="mobile">
        <img src="/assets/mobileLogo.svg" alt="logo image" className="" />
      </div>
    </LogoStyles>
  );
};

export const Layout: React.FC = () => {
  const { hasStartedGame, hasCanceledGame } = useAppSelector(userSelector);
  const [cancelGame, setCancelGame] = useState(false);
  const [pageButtons, setPageButtons] = useState<IPageButton[]>(PageButtons);
  const [activePage, setActivePage] = useState(
    pageButtons.find((ele) => ele.isActive === true)?.name
  );
  const dispatch = useAppDispatch();
  const handlePageButton = (name: string) => {
    if (!hasStartedGame) {
      const newPageButtons = pageButtons.map((ele) => {
        return { ...ele, isActive: ele.name === name };
      });
      // if the name is play game, clear cookies
      setActivePage(newPageButtons.find((ele) => ele.isActive === true)?.name);
      setPageButtons(newPageButtons);
    } else {
      if (name === "Leaderboard") {
        setCancelGame(true);
      }
    }
  };

  useEffect(() => {
    if (hasCanceledGame) {
      const newPageButtons = pageButtons.map((ele) => {
        return { ...ele, isActive: ele.name === "Leaderboard" };
      });
      setActivePage(newPageButtons.find((ele) => ele.isActive === true)?.name);
      setPageButtons(newPageButtons);
      dispatch(setGameStart(false));
      dispatch(setHasCanceledGame(false));
    }
  }, [hasCanceledGame, pageButtons, dispatch]);

  return (
    <LayoutStyles>
      <header>
        <div className="logo">
          <LogoComp />
        </div>
        <div className="page-btns">
          {pageButtons.map((ele, index) => (
            <PageButtonStyle
              key={index}
              $isActive={ele.isActive}
              onClick={() => handlePageButton(ele.name)}
            >
              <span>{ele.name}</span>
              {ele.isActive && (
                <motion.div
                  className="underline"
                  layoutId="underline"
                ></motion.div>
              )}
            </PageButtonStyle>
          ))}
        </div>
      </header>
      <div className="main">
        <AnimatePresence mode="wait">
          {activePage === "Play Game" ? (
            <GamePage />
          ) : activePage === "Leaderboard" ? (
            <LeaderboardPage />
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {cancelGame && <InfoModal closeModal={() => setCancelGame(false)} />}
      </AnimatePresence>
    </LayoutStyles>
  );
};

interface IShareModal {
  closeModal: () => void;
  restartGame: () => void;
  time: number;
  name: string;
}
export const ShareModal: React.FC<IShareModal> = ({
  closeModal,
  restartGame,
  time,
  name,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const copy = () => {
    // change local_url to website_url
    CopyToClipboard(`${WEBSITE_URL}/share/${name}`);
    setIsCopied(true);
  };
  const [show, setShow] = useState(false);
  const playAgain = () => {
    closeModal();
    restartGame();
  };
  const dispatch = useAppDispatch();
  const handleCancel = () => {
    closeModal();
    dispatch(setHasCanceledGame(true));
  };

  const handleShare = (
    medium: "facebook" | "instagram" | "twitter" | "telegram" | "whatsapp"
  ) => {
    const message = `I just played the Devfest Lagos Trivia and completed it in ${formatSecondsForPost(
      time
    )}.
Can you unveil the date faster than I did?
Player here - ${WEBSITE_URL}/share/${name}`;
    const post = generateLink(medium, message);
    window.open(post, "_blank");
  };
  return (
    <FlexModalStyles>
      <motion.div
        className="cont"
        variants={contVariant}
        initial="initial"
        animate="animate"
      >
        <div className="abs" onClick={handleCancel}>
          <CancelIcon />
        </div>
        <div className="one">
          <div className="sp">
            <motion.div
              className="h"
              variants={textVariant}
              initial="initial"
              animate="final"
            >
              <img src="/assets/popper.svg" alt="" className="" />
              <h4>Great Job!</h4>
            </motion.div>
            <motion.div
              className="tme"
              variants={textVariant}
              initial="initial"
              animate="final2"
            >
              <p>Time spent:</p>
              <h4>{formatSeconds(time)}</h4>
            </motion.div>
          </div>
          <motion.p variants={textVariant} initial="initial" animate="final2">
            Devfest Lagos 2024 dates:
          </motion.p>
          <motion.h3
            initial={{ scale: 0, x: -100 }} // Initial scale and position
            animate={{ scale: 1, x: 0 }} // Animation scale and position
            transition={{
              type: "spring",
              delay: 0.25,
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }} // Spring effect
          >
            November 15th & 16th
          </motion.h3>
        </div>
        <div className="btn">
          <div className="btm">
            <button
              type="button"
              className="share"
              onClick={() => setShow(!show)}
            >
              <ShareIcon />
              <p>Share win</p>
            </button>
            <button type="button" className="play" onClick={playAgain}>
              <p>Play Again</p>
            </button>
          </div>
          <AnimatePresence>
            {show && (
              <motion.div
                className="slide-down"
                variants={leaderboardVariant}
                initial="initial"
                animate="final"
                exit="exit"
                key="slide-down"
              >
                <div className="social" onClick={() => handleShare("whatsapp")}>
                  <WhatsappIcon />
                  <span>Whatsapp</span>
                </div>
                <div className="social" onClick={() => handleShare("twitter")}>
                  <XIcon />
                  <span>Twitter</span>
                </div>
                <div className="social">
                  <DownloadIcon />
                  <span>Download image</span>
                </div>
                <button type="button" onClick={copy}>
                  <CopyIcon />
                  <p>{isCopied ? "Copied link" : "Copy link"}</p>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </FlexModalStyles>
  );
};

interface IInfoModal {
  closeModal: () => void;
  endGame?: () => void;
}
export const InfoModal: React.FC<IInfoModal> = ({ closeModal, endGame }) => {
  const dispatch = useAppDispatch();
  const continueGame = () => {
    closeModal();
  };
  const handleAction = () => {
    if (endGame) {
      endGame();
      dispatch(setGameStart(false));
    } else {
      dispatch(setHasCanceledGame(true));
    }
    closeModal();
  };
  return (
    <InfoModalStyle>
      <div className="cont">
        <div className="abs" onClick={continueGame}>
          <CancelIcon />
        </div>
        <div className="one">
          <h3>{endGame ? "End Game?" : "Finish game first?"}</h3>
          <p>
            {endGame
              ? "This action would end the current game and you would be redirected to the home page."
              : "This action would end the current game and you would have to start over."}
          </p>
        </div>
        <div className="btn">
          {endGame ? (
            <div className="btm">
              <button type="button" className="share" onClick={handleAction}>
                <p>End game</p>
              </button>
              <button type="button" className="play" onClick={continueGame}>
                <p>Back to game</p>
              </button>
            </div>
          ) : (
            <div className="btm">
              <button type="button" className="share" onClick={continueGame}>
                <p>Finish game</p>
              </button>
              <button type="button" className="play" onClick={handleAction}>
                <p>Go to leaderboard</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </InfoModalStyle>
  );
};

interface IResetModal {
  closeModal: () => void;
  handleAction: () => void;
}
export const ResetModal: React.FC<IResetModal> = ({
  closeModal,
  handleAction,
}) => {
  const continueGame = () => {
    closeModal();
  };
  const handleReset = () => {
    handleAction();
    closeModal();
  };
  return (
    <InfoModalStyle>
      <div className="cont">
        <div className="abs" onClick={continueGame}>
          <CancelIcon />
        </div>
        <div className="one">
          <h3>Reset Game?</h3>
          <p>
            This action would end the current game and you would have to start
            over.
          </p>
        </div>
        <div className="btn">
          <div className="btm">
            <button type="button" className="share" onClick={handleReset}>
              <p>Reset game</p>
            </button>
            <button type="button" className="play" onClick={continueGame}>
              <p>Back to game</p>
            </button>
          </div>
        </div>
      </div>
    </InfoModalStyle>
  );
};
