import { FormEvent, useEffect, useState } from "react";
import {
  CounterStyles,
  GamePageStyles,
  LineStyle,
  TileStyle,
  TilesListStyle,
} from "./Style";
import { validateEmail } from "../../utils/validateEmail";
import { ButtonLoader } from "../Layout/Styles";
import { AnimatePresence, motion } from "framer-motion";
import {
  SlideinAnime,
  leaderboardVariant,
  leftVariant,
  textVariant,
} from "../../animations/animations";
import { AllTiles } from "./constants";
import { UnRevealedIcon } from "../Icons/Game";
import { RandomizeData } from "../../utils/randomization";
import { useAppDispatch } from "../../redux/hooks";
import { setGameStart } from "../../redux/userSlice";
import { InfoModal, ShareModal } from "../Layout/Layout";

interface IForm {
  username: string;
  email: string;
}
export interface Ierror {
  active: boolean;
  text: string;
}
export const GamePage = () => {
  // login button loader state
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Perform email validation
    if (!validateEmail(value)) {
      setEmailError({ active: true, text: "Invalid email address." });
    } else {
      setEmailError({ active: false, text: "Valid Email" });
      setForm({ ...form, email: value });
    }
  };
  // for form
  const [form, setForm] = useState<IForm>({ email: "", username: "" });
  // form step
  const [steps, setSteps] = useState(0);
  // For Email
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const [username, setUsername] = useState<string>("");
  // error
  const [usernameError, setUsernameError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    // Perform email validation
    if (value.trim().length < 1) {
      setUsernameError({ active: true, text: "Username Cannot be empty" });
    } else {
      setUsernameError({ active: false, text: "Number Entered" });
      setForm({ ...form, username: value });
    }
  };
  // handle signup form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    if (
      !usernameError.active &&
      !emailError.active &&
      usernameError.text !== "" &&
      emailError.text !== ""
    ) {
      setIsLoading(true);
      // mimick api call
      setTimeout(() => {
        setIsLoading(false);
        console.log(form);
        dispatch(setGameStart(true));
        setSteps(1);
      }, 2000);
    }
  };

  // form state2 logic
  const [allTiles, setAllTiles] = useState(AllTiles);
  const [selectedTiles, setSelectedTiles] = useState<ITile[] | null>(null);
  // count moves
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [hasUserEnded, setHasUserEnded] = useState(false);
  const dispatch = useAppDispatch();
  // add to a temporal list
  // if the 2 items have the same name, change their revealed state to true
  // update the moves count on each click and pair match on each match
  const handleTileClick = (id: number) => {
    // filter out revealed tiles
    const filteredTiles = allTiles.filter((ele) => !ele.isRevealed);
    // find the selected tile
    const tile = filteredTiles.find((ele) => ele.id === id);
    if (tile) {
      // if the selected tiles array is null
      if (selectedTiles === null) {
        setSelectedTiles([tile]);
      } else {
        // we want it to only take 2 items at a goal,
        // and they cannot select a tile they have selected before
        if (selectedTiles.length === 1 && selectedTiles[0].id !== id) {
          setSelectedTiles([...selectedTiles, tile]);
          setMoves(moves + 1);
          // check if the name of the two selected items are equal
          // set their revealed prop to true
          setTimeout(() => {
            if (selectedTiles[0].name === tile.name) {
              const newAllTiles = allTiles.map((ele) => {
                if (!ele.isRevealed) {
                  // Only update if isRevealed is false
                  return { ...ele, isRevealed: ele.name === tile.name };
                }
                return ele; // Return the element unchanged if isRevealed is true
              });
              const countRevealed = newAllTiles.filter(
                (ele) => ele.isRevealed
              ).length;
              if (countRevealed === 8) {
                setHasUserEnded(true);
                // dispatch(setGameStart(false));
              }
              // if this is 8, set counter end
              setMatches(matches + 1);
              setAllTiles(newAllTiles);
            }
            setSelectedTiles(null);
          }, 1000);
        }
      }
    }
  };

  const [resetBool, setResetBool] = useState(false);
  const reset = () => {
    setAllTiles(RandomizeData(AllTiles)); // reset the tiles, timer,matches value
    setSelectedTiles(null);
    setMatches(0);
    setMoves(0);
    setResetBool((prev) => !prev);
    setHasUserEnded(false);
  };

  const [hasGameEnded, setGameEnd] = useState(false);
  const [goToGamePage, setGoToGamePage] = useState(false);
  const endGame = () => {
    if (matches === 8) {
      setGameEnd(true);
    } else {
      setGoToGamePage(true);
    }
  };
  const handleGoToGamePage = () => {
    setSteps(0);
    reset();
  };
  const [cancelGame, setCancelGame] = useState(false);
  const goToLeaderboard = () => {
    setCancelGame(true);
  };
  useEffect(() => {
    setAllTiles(RandomizeData(AllTiles));
  }, []);

  return (
    <GamePageStyles>
      <AnimatePresence mode="wait">
        {steps === 0 && (
          <motion.div
            className="one"
            initial="initial"
            animate="final"
            exit="exit"
            key="ying"
            variants={leaderboardVariant}
          >
            <div className="form">
              <div className="tap">
                <motion.h1
                  initial="initial"
                  whileInView="final"
                  variants={textVariant}
                >
                  Hey techie 👋🏾 how fast can you unveil the Devfest Lagos 2024
                  Dates?
                </motion.h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-inp">
                    <motion.div
                      className="inp"
                      initial="initial"
                      whileInView="final"
                      viewport={{ once: true }}
                      variants={leftVariant}
                    >
                      <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        className={usernameError.active ? "error-bdr" : ""}
                        placeholder="Enter Username"
                      />
                      <p
                        className="error-msg"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        {usernameError.active && usernameError.text}
                      </p>
                    </motion.div>
                    <motion.div
                      className="inp"
                      initial="initial"
                      whileInView="final2"
                      viewport={{ once: true }}
                      variants={leftVariant}
                    >
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter Email Address"
                        className={emailError.active ? "error-bdr" : ""}
                        autoComplete="email"
                      />
                      <p
                        className="error-msg"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        {emailError.active && emailError.text}
                      </p>
                    </motion.div>
                  </div>
                  <motion.div
                    className="btn"
                    initial="initial"
                    whileInView="final3"
                    viewport={{ once: true }}
                    variants={leftVariant}
                  >
                    <button
                      type="submit"
                      disabled={
                        emailError.active ||
                        usernameError.active ||
                        usernameError.text == "" ||
                        emailError.text == ""
                      }
                    >
                      {isLoading ? <ButtonLoader /> : "Start Game"}
                    </button>
                  </motion.div>
                </form>
              </div>
              <div className="desktop">
                <motion.div
                  className="imgs"
                  initial="initial"
                  whileInView="final"
                  viewport={{ once: true }}
                  variants={SlideinAnime}
                >
                  <img
                    src="/assets/desktopBottomImg.svg"
                    alt="bottom image 1"
                    className=""
                  />
                </motion.div>
              </div>
              <div className="mobile">
                <motion.div
                  className="imgs"
                  initial="initial"
                  whileInView="final"
                  viewport={{ once: true }}
                  variants={SlideinAnime}
                >
                  <img
                    src="/assets/mobileBottomImg.svg"
                    alt="bottom image"
                    className=""
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
        {steps === 1 && (
          <motion.div
            className="two"
            initial="initial"
            animate="final"
            exit="exit"
            variants={leaderboardVariant}
            key="ying"
          >
            <div className="cont">
              <div className="head">
                <div className="h-1">
                  <h3>Match the pairs</h3>
                  <img
                    src="/assets/smallTileIcon.svg"
                    alt="small devfest icon"
                    className=""
                  />
                </div>
                <div className="h-2">
                  <span>Time spent:</span>
                  <Counter hasEnded={hasUserEnded} key={resetBool.toString()} />
                </div>
              </div>
              <div className="body">
                <div className="stats">
                  <div className="match card">
                    <h4>Pair Matched</h4>
                    <Line percent={(matches / 8) * 100} />
                    <div className="abn">
                      <p>
                        {matches}
                        <span className="a">/</span>
                        <span className="b">8</span>
                      </p>
                    </div>
                  </div>
                  <div className="moves card">
                    <h4>Total Moves</h4>
                    <div className="p">
                      <p>{moves}</p>
                    </div>
                  </div>
                </div>
                <TilesListStyle>
                  {allTiles.map((ele, index) => (
                    <Tile
                      key={index}
                      {...ele}
                      isSelected={selectedTiles?.some(
                        (tile) => tile.id === ele.id
                      )}
                      handleClick={() => handleTileClick(ele.id)}
                    />
                  ))}
                </TilesListStyle>
              </div>
              <div className="btm">
                <div className="game-act">
                  <button type="reset" className="reset" onClick={reset}>
                    Reset Game
                  </button>
                  <button type="submit" className="end" onClick={endGame}>
                    End Game
                  </button>
                </div>
                <div className="l-btn">
                  <button type="button" onClick={goToLeaderboard}>
                    See Leaderboard
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cancelGame && <InfoModal closeModal={() => setCancelGame(false)} />}
        {goToGamePage && (
          <InfoModal
            closeModal={() => setGoToGamePage(false)}
            endGame={handleGoToGamePage}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {hasGameEnded && (
          <ShareModal
            restartGame={reset}
            closeModal={() => setGameEnd(false)}
          />
        )}
      </AnimatePresence>
    </GamePageStyles>
  );
};

export interface ILine {
  percent: number;
}
export const Line: React.FC<ILine> = ({ percent }) => {
  return (
    <LineStyle percent={percent}>
      <div className="inner"></div>
    </LineStyle>
  );
};
interface ICounter {
  hasEnded: boolean;
}
const Counter: React.FC<ICounter> = ({ hasEnded }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    if (hasEnded) {
      return; // Exit the effect early if hasEnded is true
    }
    const countdown = setInterval(() => {
      if (seconds === 59) {
        setMinutes(minutes + 1);
      }
      setSeconds((seconds + 1) % 60);
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds, minutes, hasEnded]);

  return (
    <CounterStyles>
      <p>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </CounterStyles>
  );
};

export interface ITile {
  id: number; // primary key
  isRevealed: boolean;
  name: string; //foreign key
  img: React.ReactNode;
  isSelected?: boolean;
}
export interface ITileFunc extends ITile {
  handleClick: () => void;
}

export const Tile: React.FC<ITileFunc> = ({
  img,
  isRevealed,
  handleClick,
  isSelected,
}) => {
  return (
    <TileStyle $isRevealed={isRevealed} onClick={handleClick}>
      <div className="img">
        <AnimatePresence mode="wait">
          {isRevealed || isSelected ? (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: isRevealed || isSelected ? 1 : 0,
                x: isRevealed || isSelected ? 0 : -100,
              }} // Animate to: visible and in place
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.1 }}
            >
              {img}
            </motion.div>
          ) : (
            <motion.div
              key="unrevealed"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
              }} // Animate to: visible and in place
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.1 }}
            >
              <UnRevealedIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TileStyle>
  );
};
