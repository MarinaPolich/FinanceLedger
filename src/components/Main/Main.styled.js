import styled from "styled-components";
import { device } from "../../stylesheet/breakpoints";

export const MainBox = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export const Thumba = styled.div`
  width: 100%;
  aspect-ratio: 320 / 220;

  @media ${device.tablet} {
    aspect-ratio: 368 / 394;
  }

  @media ${device.desktop} {
    aspect-ratio: 670 / 460;
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

export const Wrapper = styled.div`
  width: 100%;
  padding: 79px 20px;
  background-color: ${({ color }) => color ?? "var(--primary)"};
  color: var(--bg-color);
  text-align: start;

  @media ${device.tablet} {
    padding: 62px 32px;
  }

  @media ${device.desktop} {
    padding: 80px 28px 80px 20px;
  }
`;

export const AboutTitle = styled.p`
  margin-bottom: 16px;
  color: inherit;
  font-size: 16px;
  text-align: inherit;

  @media ${device.tabDesk} {
    font-size: 18px;
    line-height: 1.39;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  color: inherit;
  text-align: inherit;
`;

export const Text = styled.p`
  margin-bottom: 24px;
  color: inherit;
  text-align: inherit;
`;
