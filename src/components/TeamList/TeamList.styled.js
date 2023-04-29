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

export const WrapperPhotoItem = styled.li`
  list-style: none;
  min-width: 223px;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;

  @media ${device.tabDesk} {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;

export const PhotoThumba = styled.div`
  position: relative;
  list-style: none;
  width: 100%;
  aspect-ratio: 280 / 186;
  margin-bottom: 16px;
  box-shadow: none;
  filter: none;

  cursor: pointer;
  transform-origin: center;
  transition: transform 500ms linear, box-shadow 500ms linear;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #040404;
    opacity: 0;
    transition: opacity var(--transition);
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
      0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 0.6;
      filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    }

    & div {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    aspect-ratio: 223 / 148;
    margin-bottom: 18px;
  }

  @media ${device.desktop} {
    aspect-ratio: 422 / 287;
    margin-bottom: 15px;
  }
`;

export const Photo = styled.picture`
  & img {
    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center center;
  }
`;

export const PhotoText = styled.p`
  color: inherit;
  text-align: inherit;
`;

export const SocialBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity var(--transition);
`;
