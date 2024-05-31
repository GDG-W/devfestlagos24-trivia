import { useNavigate, useParams } from "react-router-dom";
import { ShareStyles } from "./Style";
import { motion } from "framer-motion";
import { SlideinAnime, textVariant } from "../../animations/animations";
import { LogoComp } from "../Layout/Layout";
import { BACKEND_URL } from "../../libs/config";
import { useEffect, useState } from "react";
import axios from "axios";
import { ITableData } from "../Leaderboard/Index";
import { NotFound } from "../Notfound/Notfound";
import { ButtonLoader } from "../Layout/Styles";
import { formatSeconds } from "../../utils/formatTime";
import {
  capitalizeFirstLetter,
  truncateString,
} from "../../utils/truncateString";

export const ShareComp = () => {
  const { username } = useParams<{ username: string }>();
  const [score, setScore] = useState<ITableData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/attempts/rankings`)
      .then((res) => {
        if (res.data) {
          const userScore: ITableData = res.data.find(
            (ele: ITableData) =>
              ele.name.toLowerCase() === username?.toLowerCase()
          );
          if (userScore) {
            setScore(userScore);
          } else {
            setErrorMsg("The user you are looking for does not exist.");
          }
          setIsLoading(false);
        }
      })
      /* eslint-disable @typescript-eslint/no-explicit-any */
      .catch((error: any) => {
        console.log(error);
        if (error.response) {
          setErrorMsg(error.response.data.message);
        } else {
          setErrorMsg(error.message);
        }
        setIsLoading(false);
      });
  }, [username]);

  const navigate = useNavigate();
  const goToGame = () => {
    navigate("/");
  };
  return (
    <>
      {!isLoading ? (
        score ? (
          <ShareStyles>
            <header>
              <div className="logo">
                <LogoComp />
              </div>
            </header>
            <div className="one">
              <div className="f-one">
                <motion.h3
                  initial="initial"
                  whileInView="final"
                  variants={textVariant}
                >
                  Can you unveil the dates faster?
                </motion.h3>
              </div>
              <div className="f-two">
                <motion.p
                  variants={textVariant}
                  initial="initial"
                  animate="final2"
                >
                  Best Time Spent:
                </motion.p>
                <motion.h1
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
                  {formatSeconds(score.duration)}
                </motion.h1>
                <motion.h4
                  variants={textVariant}
                  initial="initial"
                  animate="final2"
                >
                  {truncateString(capitalizeFirstLetter(username), 25)}
                </motion.h4>
              </div>
              <motion.div
                className="btn"
                initial="initial"
                whileInView="final3"
                viewport={{ once: true }}
                variants={textVariant}
              >
                <button type="button" onClick={goToGame}>
                  Play Game
                </button>
              </motion.div>
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
          </ShareStyles>
        ) : (
          <NotFound headText={`404 - ${username} Not Found`} pText={errorMsg} />
        )
      ) : (
        <ShareStyles>
          <ButtonLoader />
        </ShareStyles>
      )}
    </>
  );
};
