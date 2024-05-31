import { WEBSITE_URL } from "../../libs/config";
import { formatSeconds } from "../../utils/formatTime";
import {
  capitalizeFirstLetter,
  truncateString,
} from "../../utils/truncateString";
import { LogoStyles } from "../Layout/Styles";
import { PostCardStyles } from "./Style";
import { forwardRef } from "react";

interface PostCardProps {
  name: string;
  time: number;
}

export const PostCard = forwardRef<HTMLDivElement, PostCardProps>(
  ({ name, time }, ref) => {
    return (
      <PostCardStyles ref={ref}>
        <header>
          <div className="logo-x">
            <LogoStyles>
              <div className="desktop">
                <img src="/assets/logo.svg" alt="logo image" className="" />
              </div>
              <div className="mobile">
                <img
                  src="/assets/mobileLogo.svg"
                  alt="logo image"
                  className=""
                />
              </div>
            </LogoStyles>
          </div>
        </header>
        <div className="one">
          <div className="f-one">
            <a href="#">
              <p>{WEBSITE_URL}</p>{" "}
            </a>
            <h3>Can you unveil the dates faster?</h3>
          </div>
          <div className="f-two">
            <p>Time Spent:</p>
            <h1>{formatSeconds(time)}</h1>
            <h4>{truncateString(capitalizeFirstLetter(name), 25)}</h4>
          </div>
        </div>
        <div className="imgs">
          <img
            src="/assets/desktopBottomImg.svg"
            alt="bottom image 1"
            className=""
          />
        </div>
      </PostCardStyles>
    );
  }
);
