import styled from "styled-components";
import { device } from "../../stylesheet/breakpoints";

export const Wrapper = styled.div`
  padding: 56px 20px 40px 20px;
  color: var(--title-color);
  text-align: center;

  @media ${device.tablet} {
    padding: 48px 32px 40px 32px;
  }

  @media ${device.desktop} {
    padding: 80px 28px;
  }
`;
