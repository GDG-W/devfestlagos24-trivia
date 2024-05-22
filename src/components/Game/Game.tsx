import { FormEvent, useState } from "react";
import { GamePageStyles } from "./Style";
import { validateEmail } from "../../utils/validateEmail";
import { ButtonLoader } from "../Layout/Styles";

interface IForm {
  username: string;
  email: string;
}
export interface Ierror {
  active: boolean;
  text: string;
}
export const GamePage = () => {
  // login button loader state
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Perform email validation
    if (!validateEmail(value)) {
      setEmailError({ active: true, text: "Invalid email address." });
    } else {
      setEmailError({ active: false, text: "Valid Email" });
      setForm({ ...form, email: value });
    }
  };
  // for form
  const [form, setForm] = useState<IForm>({ email: "", username: "" });
  const [steps, setSteps] = useState(0);
  // For Email
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const [username, setUsername] = useState<string>("");
  // error
  const [usernameError, setUsernameError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    // Perform email validation
    if (value.trim().length < 1) {
      setUsernameError({ active: true, text: "Username Cannot be empty" });
    } else {
      setUsernameError({ active: false, text: "Number Entered" });
      setForm({ ...form, username: value });
    }
  };
  // handle signup form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    if (
      !usernameError.active &&
      !emailError.active &&
      usernameError.text !== "" &&
      emailError.text !== ""
    ) {
      setIsLoading(true);
      // mimick api call
      setTimeout(() => {
        setIsLoading(false);
        console.log(form);
        setSteps(1);
      }, 2000);
    }
  };
  return (
    <GamePageStyles>
      {steps === 0 && (
        <div className="one">
          <div className="form">
            <div className="tap">
              <h1>
                Hey techie 👋🏾 how fast can you unveil the Devfest Lagos 2024
                Dates?
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-inp">
                  <div className="inp">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleUsernameChange}
                      className={usernameError.active ? "error-bdr" : ""}
                      placeholder="Enter Username"
                    />
                    <p
                      className="error-msg"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      {usernameError.active && usernameError.text}
                    </p>
                  </div>
                  <div className="inp">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter Email Address"
                      className={emailError.active ? "error-bdr" : ""}
                      autoComplete="email"
                    />
                    <p
                      className="error-msg"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      {emailError.active && emailError.text}
                    </p>
                  </div>
                </div>
                <div className="btn">
                  <button
                    type="submit"
                    disabled={
                      emailError.active ||
                      usernameError.active ||
                      usernameError.text == "" ||
                      emailError.text == ""
                    }
                  >
                    {isLoading ? <ButtonLoader /> : "Start Game"}
                  </button>
                </div>
              </form>
            </div>
            <div className="desktop">
              <div className="imgs">
                <img
                  src="/assets/desktopBottomImg.svg"
                  alt="bottom image 1"
                  className=""
                />
              </div>
            </div>
            <div className="mobile">
              <div className="imgs">
                <img
                  src="/assets/mobileBottomImg.svg"
                  alt="bottom image"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {steps === 1 && <div className="two">Game here</div>}
    </GamePageStyles>
  );
};
