import { useParams } from "react-router-dom";

export const ShareComp = () => {
  const { username } = useParams<{ username: string }>();
  return (
    <>
      <h1>Hello World!</h1>
      <h1>{username} is a Fraud</h1>
    </>
  );
};
