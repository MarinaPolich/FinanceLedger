import styled from "styled-components";
import { device } from "../../stylesheet/breakpoints";

export const WrapperImage = styled.ul`
  width: 100%;

  @media ${device.tabDesk} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px 20px;
  }

  @media ${device.tablet} {
    grid-gap: 18px;
  }

  @media ${device.desktop} {
    grid-gap: 24px 20px;
  }
`;

export const WrapperImageItem = styled.li`
  position: relative;
  list-style: none;
  width: 100%;
  aspect-ratio: 280 / 176;
  margin-bottom: 8px;
  cursor: pointer;

  @media ${device.tablet} {
    aspect-ratio: 223 / 148;
    margin-bottom: 0;
  }

  @media ${device.desktop} {
    aspect-ratio: 421 / 282;
    margin-bottom: 0;
  }

  &::before {
    content: "";
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color var(--transition);
  }

  &:hover::before {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Image = styled.picture`
  & img {
    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center center;
  }
`;

export const LinkImage = styled.a`
  text-decoration: none;
`;
