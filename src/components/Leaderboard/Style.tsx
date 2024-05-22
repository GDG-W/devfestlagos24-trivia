import styled from "styled-components";

export const LeaderboardPageStyles = styled.div`
//   border: 2px solid #fff;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
    .cont{
        border-top: 0.5625rem solid #302F2F;
        background: #232222;
        width: 50%;
        height: 100%;
        overflow-y: scroll;
        .head{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3125rem;
            margin-top: 1.12rem;
        }
    }
  @media (max-width: 728px) {
    padding: 1rem;
    padding-top: 2rem;
    .cont{
        width: 100%;
    }
  }
  @media (min-width: 728px) {
    margin-top: 3rem;
  }
  @media (min-width: 998px) {
    min-height: 100vh;
    padding-bottom: 1.5rem;
    .cont{
        height: 100vh;
    }
  }
`;
export const TableStyles = styled.table`
  border: 2px solid #fff;
`
export const TrStyles = styled.table`
  border: 2px solid #fff;
`
