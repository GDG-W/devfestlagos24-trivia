import styled, { css } from "styled-components";
import { ILine } from "./Game";

export const GamePageStyles = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 0rem;
  .one,
  .form,
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form {
    justify-content: space-between;
  }
  .tap {
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .form {
    height: 100%;
  }
  .one {
    height: 100%;
  }
  form {
    gap: 1.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  h1 {
    color: #fff;
    text-align: center;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 85%;
  }
  .form-inp {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    input {
      height: 3.5rem;
      padding: 0.625rem;
      border-radius: 0.25rem;
      border: 1px solid #4c4b4b;
      background: transparent;
      color: #fff;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #000 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    p {
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25rem;
    }
    .error-msg {
      color: var(--Error-500, #cb1a14);
    }
    .error-bdr {
      border: 1px solid #eb5017;
    }
  }
  .btn {
    width: 100%;
    button {
      width: 100%;
      height: 3rem;
      border-radius: 0.25rem;
      background: #4285f4;
      color: #fff;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    button[disabled] {
      background: #302f2f;
      color: #fff;
    }
  }
  .two {
    // border: 2px solid #fff;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .cont {
      background: #232222;
      width: 62.5%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      .head {
        display: flex;
        align-items: center;
        padding-bottom: 0.5rem;
        border-bottom: 0.5px solid #4c4b4b;
        justify-content: space-between;
        .h-1 {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          h3 {
            color: #fff;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }
        .h-2 {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          span {
            color: #606060;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
      .stats {
        display: flex;
        align-items: center;
        gap: 1.5625rem;
        .card {
          width: 100%;
          height: fit-content;
          padding: 0.5rem 1rem;
          flex-direction: column;
          border-radius: 0.5rem;
          background: #000;
          display: flex;
          gap: 0.18244rem;
          justify-content: space-between;
          border-top: 0.5rem solid #302f2f;
          h4 {
            color: #fff;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
          .abn p {
            color: #fff;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            .a {
              font-size: 0.72981rem;
            }
            .b {
              color: #606060;
              font-size: 0.75rem;
            }
          }
          .p {
            p {
              color: #fff;
              font-size: 1rem;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
          }
        }
      }
      .btm {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.75rem;
        .l-btn button {
          background: transparent;
          text-decoration-line: underline;
          color: #f9ab00;
          font-size: 1rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          border-radius: 0.25rem;
        }
        flex-wrap: wrap;
        .game-act {
          display: flex;
          gap: 0.75rem;
          button {
            color: #fff;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            width: 5.625rem;
            padding: 0.45613rem;
            width: fit-content;
            white-space: nowrap;
            padding-right: 0.625rem;
            border-radius: 0.25rem;
          }
          .reset {
            background: #302f2f;
          }
          .end {
            background: #4285f4;
          }
        }
      }
    }
  }
  @media (max-width: 728px) {
    .desktop {
      display: none;
    }
    .one .tap {
      padding: 4rem 1rem 0rem 1rem;
    }
    h1 {
      font-size: 1.25rem;
    }
    .form-inp {
      width: 100%;
      input {
        height: 2.75rem;
        width: 100%;
      }
    }
    .imgs {
      width: 100vw;
      img {
        width: 100%;
      }
    }
    .two {
      padding: 1rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      .cont {
        width: 100%;
        padding: 1rem 0.84rem 1.25rem 0.84rem;
        .stats {
          h4 {
            font-size: 0.75rem;
          }
        }
        .p p {
          font-size: 0.75rem;
        }
        .btm {
          .l-btn button {
            font-size: 0.75888rem;
          }
        }
      }
      .head {
        flex-wrap: wrap;
        gap: 0.25rem;
      }
      .head .h-1 {
        h3 {
          font-size: 0.88531rem;
        }
        span {
          font-size: 0.63238rem;
        }
      }
    }
  }
  @media (min-width: 728px) {
    .mobile {
      display: none;
    }
    padding-top: 6rem;
    .imgs {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      img {
        width: 100%;
      }
    }
    form {
      width: 31.25rem;
    }
    .form-inp {
      width: 100%;
      gap: 1rem;
      input {
        width: 100%;
      }
    }
    .two {
      padding-bottom: 1.5rem;
      .cont {
        padding: 1rem;
        .btm .game-act button {
          width: fit-content;
          white-space: nowrap;
          padding-right: 0.625rem;
        }
      }
    }
  }
  @media (min-width: 998px) {
    margin-top: 6rem;
    padding: 0rem;
    form {
      gap: 2.5rem;
    }
    .imgs {
      padding-top: 4rem;
    }
    .two {
      .cont {
        width: 45%;
        padding: 1.5rem 1.25rem 1.5rem 1.25rem;
      }
    }
  }
`;

export const LineStyle = styled.div<ILine>`
  height: 0.13681rem;
  width: 100%;
  border-radius: 0.36488rem;
  background: #fff;
  .inner {
    height: 0.13681rem;
    width: ${(props) => props.percent}%;
    transition: 0.25s;
    background: #f9ab00;
  }
`;
export const CounterStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media (max-width: 728px) {
    p {
      font-size: 0.88531rem;
    }
  }
`;

export const TilesListStyle = styled.div`
  margin-top: 1.19rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(5.8125rem, 100%), 1fr));
  column-gap: 1.25rem;
  row-gap: 0.75rem;
  @media (max-width: 500px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(min(4.23694rem, 100%), 1fr)
    );
    column-gap: 0.91rem;
    row-gap: 0.65rem;
  }
`;
interface ITileStyle {
  $isRevealed: boolean;
}
export const TileStyle = styled.div<ITileStyle>`
  width: 100%;
  cursor: pointer;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: #000;
  border: 2px solid transparent;
  overflow: hidden;
  @media (max-width: 998px) {
    .gemini {
      object-fit: contain;
    }
  }
  @media (max-width: 500px) {
    padding: 1.09469rem;
    height: 4.59588rem;
    .gemini {
      width: 3.21713rem;
      height: 1.18763rem;
      flex-shrink: 0;
      object-fit: cover;
    }
    .chrome {
      width: 4.59588rem;
      height: 2.98731rem;
      flex-shrink: 0;
    }
  }
  @media (max-width: 375px) {
    // height: 4.59588rem;
  }
  // if the tile is revealed, we dont want the hover effect
  @media (min-width: 998px) {
    ${(props) =>
      !props.$isRevealed &&
      css`
        &:hover {
          border: 2px solid #f9ab00;
          background: rgba(249, 171, 0, 0.15);
        }
      `}
  }
`;
