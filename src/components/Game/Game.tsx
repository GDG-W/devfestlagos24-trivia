import { FormEvent, useState } from "react";
import { CounterStyles, GamePageStyles, LineStyle } from "./Style";
import { validateEmail } from "../../utils/validateEmail";
import { ButtonLoader } from "../Layout/Styles";
import { AnimatePresence, motion } from "framer-motion";
import {
  SlideinAnime,
  leaderboardVariant,
  leftVariant,
  textVariant,
} from "../../animations/animations";

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
        setSteps(1);
      }, 2000);
    }
  };
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
                  <Counter />
                </div>
              </div>
              <div className="body">
                <div className="stats">
                  <div className="match card">
                    <h4>Pair Matched</h4>
                    <Line percent={(1 / 8) * 100} />
                    <div className="abn">
                      <p>
                        0<span className="a">/</span>
                        <span className="b">8</span>
                      </p>
                    </div>
                  </div>
                  <div className="moves card">
                    <h4>Total Moves</h4>
                    <div className="p">
                      <p>0</p>
                    </div>
                  </div>
                </div>
                <div className="tiles">
                  <p>Tiles here</p>
                  <p>Tiles here</p>
                  <p>Tiles here</p>
                  <p>Tiles here</p>
                </div>
              </div>
              <div className="btm">
                <div className="game-act">
                  <button type="reset" className="reset">Reset Game</button>
                  <button type="submit" className="end">End Game</button>
                </div>
                <div className="l-btn">
                  <button type="button">See Leaderboard</button>
                </div>
              </div>
            </div>
          </motion.div>
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
const Counter = () => {
  return (
    <CounterStyles>
      <p>00:00</p>
    </CounterStyles>
  );
};
