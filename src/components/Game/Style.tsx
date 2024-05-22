import styled from "styled-components";

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
  .form{
    justify-content: space-between;
  }
  .tap{
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
  .one{
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
  @media (max-width: 728px) {
    .desktop {
      display: none;
    }
    .one .tap{
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
    .imgs{
        width: 100vw;
        img{
            width: 100%;
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
  }
  @media (min-width: 998px) {
    margin-top: 6rem;
    padding: 0rem;
    form {
      gap: 2.5rem;
    }
    .imgs{
        padding-top: 4rem;
    }
  }
`;
