import styled from "styled-components";

export const ShareStyles = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 0rem 1rem 0rem 1rem;
  header {
    margin-top: 0.25rem;
  }
  h1 {
    color: #f9ab00;
    leading-trim: both;
    text-edge: cap;
    font-size: 6.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
  }
  .f-one {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    a {
      p {
        color: #f9ab00;
        text-align: center;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      display: flex;
      width: fit-content;
      justify-content: center;
      text-decoration: none;
    }
    a:hover{
        text-decoration: underline 2px solid #F9AB00;
    }
    h3 {
      color: #fff;
      text-align: center;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      font-variant: small-caps;
    }
  }
  .f-two {
    p {
      color: #9f9f9f;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    h4 {
      color: #fff;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-top: 0.3125rem;
      text-align: center;
      white-space: break-all;
    }
  }
  img {
    object-fit: cover;
  }
  @media (max-width: 998px) {
    height: 100vh;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2.5rem;
    }
    .desktop {
      display: none;
    }
    .one{
        gap: 1.25rem;
    }
    .f-one {
      a {
        p {
          font-size: 1rem;
        }
      }
      h3 {
        font-size: 1.8rem;
      }
    }
    .f-two{
        h4{
            font-size: 1.25rem;
        }
    }
    .imgs {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      img {
        width: 100%;
      }
    }
  }
  @media (min-width: 500px) {
    padding-top: 6rem;
    .mobile {
      display: none;
    }
    .imgs {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  @media (min-width: 998px) {
    padding: 0rem;
  }
`;
