import styled from "styled-components";
import { LogoComp } from "../Layout/Layout";
import { motion } from "framer-motion";
import { textVariant } from "../../animations/animations";

interface INotFound {
  headText?: string;
  pText?: string;
}
export const NotFound: React.FC<INotFound> = ({ headText, pText }) => {
  return (
    <NotfoundStyles>
      <div className="logo">
        <LogoComp />
      </div>
      <motion.h1 variants={textVariant} initial="initial" animate="final">
        {headText}
      </motion.h1>
      <motion.p variants={textVariant} initial="initial" animate="final2">
        {pText}
      </motion.p>
    </NotfoundStyles>
  );
};

export const NotfoundStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    max-width: 90%;
    text-align: center;
    overflow: hidden;
  }
  p {
    font-size: 0.875rem;
  }
  @media (max-width: 728px) {
    h1 {
      font-size: 1.25rem;
    }
    p {
      width: 80%;
    }
  }
`;
