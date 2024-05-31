import styled, { css } from "styled-components";
import { Rotate } from "../../animations/button";

export const LogoStyles = styled.div`
  @media (max-width: 728px) {
    .desktop {
      display: none;
    }
    img {
      width: 5.8125rem;
      height: auto;
    }
  }
  @media (min-width: 728px) {
    img {
      width: 9.375rem;
      height: auto;
      flex-shrink: 0;
    }
    .mobile {
      display: none;
    }
  }
`;

export const LayoutStyles = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .page-btns {
    display: flex;
    gap: 2.75rem;
  }
  header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .main {
    height: 100%;
  }
  @media (max-width: 998px) {
    header {
      padding-right: 1.25rem;
    }
    height: 100vh;
  }
  @media (max-width: 728px) {
    .page-btns {
      gap: 1rem;
    }
  }
  @media (min-width: 998px) {
    header {
      margin-top: 2rem;
      justify-content: center;
    }
    .logo {
      position: absolute;
      left: 7%;
    }
  }
`;

interface IActiveComp {
  $isActive: boolean;
}
export const PageButtonStyle = styled.button<IActiveComp>`
  color: #4c4b4b;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  position: relative;
  font-weight: 700;
  line-height: normal;
  background: transparent;
  .underline {
    height: 0.25rem;
    flex-shrink: 0;
    align-self: stretch;
    background: #f9ab00;
    width: 100%;
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    right: 0;
  }
  ${(props) =>
    props.$isActive &&
    css`
      color: #fff;
    `}
  @media (max-width: 728px) {
    font-size: 0.875rem;
    .underline {
      height: 0.125rem;
      bottom: -0.25rem;
    }
  }
`;

export const ButtonLoader = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-top: 4px solid transparent;
  margin: auto;
  animation: ${Rotate} 0.6s ease infinite;
`;

export const ModalStyles = styled.div`
  position: fixed;
  transition: 0.4s;
  left: 50%;
  top: 50%;
  height: 100vh;
  width: 100vw;
  margin-left: -50vw;
  margin-top: -50vh;
  z-index: 20;
  background: rgba(0, 0, 0, 0.7);
`;

export const FlexModalStyles = styled(ModalStyles)`
  display: flex;
  align-items: center;
  justify-content: center;
  .cont {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    border-radius: 0.5rem;
    background: #232222;
    width: 62.5%;
    text-align: center;
  }
  .h {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    h4 {
      color: #fff;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .one {
    .sp {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .tme {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        p {
          color: #606060;
          font-size: 0.75rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-top: 0rem;
        }
        h4 {
          color: #fff;
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
    }
    h3 {
      color: #f9ab00;
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: #737373;
      margin-top: 1rem;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    .btm {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      button {
        width: 100%;
        height: 2.75rem;
        padding: 0.625rem;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          color: #fff;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
    }
    .slide-down {
      padding-top: 1rem;
      flex-wrap: wrap;
      border-top: 0.5px solid #4c4b4b;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      button {
        height: 2.75rem;
        padding: 0.625rem;
        justify-content: center;
        align-items: center;
        width: fit-content;
        gap: 0.625rem;
        display: flex;
        border-radius: 0.25rem;
        background: #302f2f;
        p {
          color: #fff;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
      .social {
        justify-content: center;
        cursor: pointer;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
        span {
          color: #737373;
          font-size: 0.65rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
    }
    .share {
      background: #4285f4;
      gap: 0.625rem;
    }
    .share:hover {
      border: 2px solid #4285f4;
      background: #302f2f;
    }
    .play {
      background: #302f2f;
    }
  }
  .cont {
    position: relative;
    .abs {
      position: absolute;
      top: 1rem;
      left: 90%;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    .cont {
      padding: 1.60713rem;
      width: 95%;
      gap: 1.60713rem;
    }
    .h {
      h4 {
        font-size: 0.75rem;
      }
    }
    .one {
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.875rem;
      }
      .sp {
        h4 {
          font-size: 0.875rem;
        }
        p {
          font-size: 0.625rem;
        }
      }
    }
    .btn {
      width: 100%;
      .btm {
        button {
          width: 100%;
          border-radius: 0.16069rem;
          p {
            font-size: 0.75rem;
          }
        }
      }
      .slide-down {
        p {
          font-size: 0.625rem;
        }
        button {
          padding: 0.40375rem;
          gap: 0.40375rem;
        }
        .social {
          span {
            font-size: 0.5rem;
          }
        }
      }
      .share {
        gap: 0.40181rem;
      }
      .share:hover {
        border: 1.292px solid #4285f4;
      }
    }
    .abs {
      svg {
        scale: 0.67;
      }
    }
  }
  @media (min-width: 998px) {
    .cont {
      width: 45%;
    }
  }
`;

export const InfoModalStyle = styled(FlexModalStyles)`
  .one p {
    color: #fff;
  }
  .one {
    align-items: unset;
    h3{
      width: fit-content;
    }
    p,
    h3 {
      text-align: left;
    }
  }
`;


export const DownloadbtnStyle = styled.div`
  .kee{
    position: absolute;
    left: 100vw;
  }
`
