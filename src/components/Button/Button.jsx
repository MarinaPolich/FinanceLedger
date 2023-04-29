import { ButtonBoxOutline, ButtonBoxSolid } from "./Button.styled";

export const ButtonOutline = ({ children, color }) => {
  return <ButtonBoxOutline color={color}>{children}</ButtonBoxOutline>;
};

export const ButtonSolid = ({ children }) => {
  return <ButtonBoxSolid>{children}</ButtonBoxSolid>;
};
