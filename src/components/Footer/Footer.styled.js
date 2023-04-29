import styled from "styled-components";
import { device } from "../../stylesheet/breakpoints";

export const FooterBox = styled.footer`
  width: 100%;
  padding: 20px 30px;
  background-color: var(--title-color);
  color: var(--bg-color);
  text-align: center;
`;

export const Text = styled.p`
  margin-top: 12px;
  text-align: center;

  @media ${device.tabDesk} {
    margin-top: 10px;
  }
`;
