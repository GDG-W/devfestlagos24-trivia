import styled from "styled-components";

export const NotFound = () => {
  return (
    <NotfoundStyles>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
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
  h1{
    font-size: 2.5rem;
  }
  p{
    font-size: 0.875rem;
  }
  @media (max-width: 728px) {
    h1 {
        font-size: 1.25rem;
      }
      p{
        width: 80%;
      }
  }
`;
