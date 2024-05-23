import { useState } from "react";
import { LayoutStyles, LogoStyles, PageButtonStyle } from "./Styles";
import { IPageButton, PageButtons } from "./constants";
import { AnimatePresence, motion } from "framer-motion";
import { GamePage } from "../Game/Game";
import { LeaderboardPage } from "../Leaderboard/Index";

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
  const [pageButtons, setPageButtons] = useState<IPageButton[]>(PageButtons);
  const [activePage, setActivePage] = useState(
    pageButtons.find((ele) => ele.isActive === true)?.name
  );
  const handlePageButton = (name: string) => {
    const newPageButtons = pageButtons.map((ele) => {
      return { ...ele, isActive: ele.name === name };
    });
    setActivePage(newPageButtons.find((ele) => ele.isActive === true)?.name);
    setPageButtons(newPageButtons);
  };
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
    </LayoutStyles>
  );
};
