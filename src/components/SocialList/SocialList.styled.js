import styled from "styled-components";

export const WrapperIcon = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IconItem = styled.li`
  height: 35px;
  list-style: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const IconLink = styled.a`
  outline: none;
  text-decoration: none;

  & .social-icon {
    height: 35px;
  }

  &.linkHoverColor {
    margin-bottom: 10px;
    color: var(--bg-color);
    transition: color var(--transition);

    &:hover,
    &:focus,
    &:active {
      color: var(--primary);
    }
  }

  &.linkHoverOpacity {
    color: var(--bg-color);
    opacity: 1;
    transition: opacity var(--transition);

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }
`;
