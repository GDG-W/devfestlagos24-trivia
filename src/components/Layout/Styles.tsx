import styled, { css } from "styled-components";
import { Rotate } from "../../animations/button";

export const LogoStyles = styled.div`
  @media (max-width: 728px) {
    .desktop {
      display: none;
    }
    img {
      width: 5.8125rem;
      height: 3.4875rem;
    }
  }
  @media (min-width: 728px) {
    img {
      width: 9.375rem;
      height: 5.25rem;
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
  .main{
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
    header{
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
