import styled from "styled-components";
import { device } from "../../stylesheet/breakpoints";

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 22px;
  text-align: center;
  background-color: rgba(51, 51, 51, ${({ opacity }) => opacity ?? 0});
  z-index: 10;

  @media ${device.tabDesk} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media ${device.tablet} {
    padding: 16px 32px;
  }

  @media ${device.desktop} {
    padding: 32px 28px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  transform-origin: left;
  transition: transform 500ms linear;

  @media ${device.tabDesk} {
    justify-content: flex-start;
    margin-bottom: 0px;
  }

  & span:first-child {
    height: 38px;
    margin-right: 4px;
    padding-block: 1.5px;

    .logo-icon {
      width: 40px;
      height: 35px;
      margin-right: 0;
    }
  }

  & span {
    color: var(--primary);
    font-size: 28px;
    line-height: 1.357;

    @media ${device.tabDesk} {
      margin-bottom: 0;
      font-size: 35px;
      line-height: 1.37;
    }
  }

  & span:last-child {
    color: var(--bg-color);
  }

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;
  cursor: pointer;

  & a {
    padding: 6px;
    color: var(--bg-color);
    border-bottom: 2px solid transparent;
    font-size: 16px;
    transition: border-bottom var(--transition);

    @media ${device.tablet} {
      padding: 10px;
      font-size: 18px;
      line-height: 1.39;
    }

    @media ${device.desktop} {
      padding: 10px 20px;
      font-size: 18px;
      line-height: 1.39;
    }

    &:hover,
    &:focus,
    &:active,
    &.active {
      border-bottom: 2px solid var(--primary);
    }
  }
`;
