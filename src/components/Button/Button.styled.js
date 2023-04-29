import styled from "styled-components";

export const ButtonBoxOutline = styled.button`
  min-width: 155px;
  padding: 16px 32px;
  background-color: transparent;
  color: var(--bg-color);
  border: 1px solid var(--bg-color);
  border-radius: 5px;
  font-size: 18px;
  line-height: 1.39;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition),
    border var(--transition);

  &:hover,
  &:focus {
    background-color: var(--bg-color);
    color: ${({ color }) => color ?? "var(--primary)"};
    border: 1px solid ${({ color }) => color ?? "var(--primary)"};
  }
`;

export const ButtonBoxSolid = styled(ButtonBoxOutline)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--primary);
  border: none;
  transition: background-color var(--transition), color var(--transition),
    border var(--transition);

  & span:first-child {
    height: 19px;

    .icon {
      fill: var(--bg-color);
    }
  }

  &:hover,
  &:focus {
    background-color: var(--acent-color);
    color: var(--bg-color);
    border: none;
  }
`;
