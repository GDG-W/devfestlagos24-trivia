import styled from "styled-components";
import { leaderboardVariant} from "../../animations/animations";
import { motion } from "framer-motion";

export const LeaderboardPageStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  whileInView: "final",
  exit : "exit",
  variants: leaderboardVariant,
}))`
  //   border: 2px solid #fff;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .cont {
    border-top: 0.5625rem solid #302f2f;
    background: #232222;
    width: 62.5%;
    height: 100%;
    overflow-y: scroll;
    .head {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3125rem;
      margin-top: 1.12rem;
    }
    padding: 0.5rem;
    &::-webkit-scrollbar {
      width: 0.25rem; /* width of the scrollbar */
      background: #232222;
      border-radius: 0.125rem;
      height: 0.25rem;
    }

    &::-webkit-scrollbar-track {
      background: #232222;
      width: 0.25rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.25rem;
      background: #4c4b4b;
    }
  }
  @media (max-width: 728px) {
    padding: 1rem;
    padding-top: 2rem;
    .cont {
      width: 100%;
    }
  }
  @media (min-width: 728px) {
    margin-top: 3rem;
    min-height: 100vh;
    padding-bottom: 1.5rem;
  }

  @media (min-width: 998px) {
    .cont {
      height: 100vh;
      width: 50%;
    }
  }
`;
export const TableStyles = styled.table`
  min-width: 100%;
  table-layout: fixed;
  margin-top: 1.25rem;
  border-collapse: collapse;
  padding: 0.5rem;
  th {
    padding: 0.75rem 1.5rem;
    white-space: nowrap;
    text-align: left;
    color: #9f9f9f;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  th:first-of-type {
    padding-left: 2rem;
  }
  thead {
    display: table-header-group; /* Ensures thead is treated properly */
  }
  tbody {
    display: table-row-group; /* Ensures tbody is treated properly */
  }
  @media (max-width: 500px) {
    th {
      font-size: 0.625rem;
    }
  }
`;

interface TrStylesProps {
  custom: number;
}

export const TrStyles = styled(motion.tr).attrs<TrStylesProps>((props) => ({
  initial: "initial",
  animate: "final",
  custom: props.custom, // Use the custom prop passed from the TableRow
  variants: {
    initial: {
      opacity: 0,
      x: -100,
    },
    final: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.125, // Set the delay based on the index
      },
    }),
  },
}))<TrStylesProps>`
  border-bottom: 0.5px solid #4c4b4b;
  width: 100%;
  td {
    padding: 0.75rem 1.5rem;
    height: 100%;
    text-align: left;
    text-overflow: ellipsis;
    min-height: 100px;
    .circle {
      border-radius: 50%;
      background: #000;
      display: inline-flex;
      width: 2.125rem;
      height: 2.125rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
    }
    p {
      color: #fff;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .fl {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: left;
    }
  }
  @media (max-width: 500px) {
    td {
      p {
        font-size: 0.75rem;
      }
    }
  }
`;
