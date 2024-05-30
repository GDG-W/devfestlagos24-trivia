import { useParams } from "react-router-dom";
import { ShareStyles } from "./Style";
import { motion } from "framer-motion";
import { SlideinAnime } from "../../animations/animations";
import { LogoComp } from "../Layout/Layout";
import { BACKEND_URL, WEBSITE_URL } from "../../libs/config";
import { useEffect, useState } from "react";
import axios from "axios";
import { ITableData } from "../Leaderboard/Index";
import { NotFound } from "../Notfound/Notfound";
import { ButtonLoader } from "../Layout/Styles";
import { formatSeconds } from "../../utils/formatTime";
import { truncateString } from "../../utils/truncateString";

export const ShareComp = () => {
  const { username } = useParams<{ username: string }>();
  const [score, setScore] = useState<ITableData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/attempts/rankings`)
      .then((res) => {
        if (res.data) {
          const userScore: ITableData = res.data.find(
            (ele: ITableData) => ele.name === username?.toLowerCase()
          );
          console.log(userScore);
          if (userScore) {
            setScore(userScore);
          }
          setIsLoading(false);
        }
      })
      /* eslint-disable @typescript-eslint/no-explicit-any */
      .catch((error: any) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [username]);
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
                <a href={WEBSITE_URL}>
                  <p>DevFestLagos.com/trivia</p>
                </a>
                <h3>Can you unveil the dates faster?</h3>
              </div>
              <div className="f-two">
                <p>Time spent:</p>
                <h1>{formatSeconds(score.duration)}</h1>
                <h4>{truncateString(username,25)}</h4>
              </div>
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
          <NotFound
            headText={`404 - ${username} Not Found`}
            pText="The user you are looking for does not exist."
          />
        )
      ) : (
        <ShareStyles>
          <ButtonLoader />
        </ShareStyles>
      )}
    </>
  );
};
