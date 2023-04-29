import styled from "styled-components";
import { showcaseJpg, showcaseWebp } from "../../assets/image/";
import { device } from "../../stylesheet/breakpoints";

export const HeroBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 320 / 533;
  margin: 0 auto;
  padding-top: 60px;
  padding-inline: 20px;

  background-color: var(--title-color);
  background-image: var(--bg-gradient), url(${showcaseJpg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @supports (background-image: url(${showcaseWebp})) {
    background-image: var(--bg-gradient), url(${showcaseWebp});
  }

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: var(--bg-gradient), url(${showcaseWebp});

    @supports (background-image: url(${showcaseWebp})) {
      background-image: var(--bg-gradient), url(${showcaseWebp});
    }
  }

  @media ${device.tablet} {
    aspect-ratio: 768 / 1024;
    padding-top: 0;
    padding-inline: 122px;
  }

  @media ${device.desktop} {
    aspect-ratio: 1360 / 768;
    padding-top: 0;
    padding-inline: 28px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const TitleSecond = styled.h2`
  margin-bottom: 24px;
`;
