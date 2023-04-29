import { arrow } from "../../assets/icon";
import { ButtonSolid } from "../Button/Button";
import { HeroBox, Title, TitleSecond } from "./Hero.styled";
import { ReactSVG } from "react-svg";

export const Hero = () => {
  return (
    <HeroBox>
      <Title>the sky is the limit</Title>
      <TitleSecond>We provide world class financial assistance</TitleSecond>
      <ButtonSolid type="button">
        <ReactSVG
          src={arrow}
          beforeInjection={(svg) => {
            svg.classList.add("icon");
          }}
          title="arrow"
          wrapper="span"
        />
        <span>Read More</span>
      </ButtonSolid>
    </HeroBox>
  );
};
