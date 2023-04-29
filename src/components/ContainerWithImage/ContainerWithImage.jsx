import { Container } from "./ContainerWithImage.styled";

export const ContainerWithImage = ({ children, direction }) => {
  return <Container direction={direction}>{children}</Container>;
};
