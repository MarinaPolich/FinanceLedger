import styled from "styled-components";
import { device } from "../../stylesheet/breakpoints";

export const Container = styled.div`
  width: 100%;

  @media ${device.tabDesk} {
    display: flex;
    flex-direction: ${({ direction }) => direction ?? "row"};
    justify-content: space-between;
    align-items: stretch;
  }
`;
