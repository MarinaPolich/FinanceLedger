import styled from "styled-components";
import { Field, Form } from "formik";
import { device } from "../../stylesheet/breakpoints";

export const FormBox = styled(Form)`
  width: 100%;
  background-color: transparent;
`;

export const TitleForm = styled.h2`
  margin-bottom: 69px;
  color: var(--title-color);
  text-align: start;
  line-height: 1.5;

  @media ${device.tabDesk} {
    margin-bottom: 24px;
    line-height: 1.35;
  }
`;

export const InputForm = styled(Field)`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px 8px;
  color: var(--title-color);
  background-color: var(--bg-color);
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.44;

  &:nth-child(3) {
    margin-bottom: 24px;
  }

  &::placeholder {
    color: #808080;
    font-size: inherit;
    line-height: inherit;
  }

  &.error {
    border: 1px solid var(--warning);
  }

  @media ${device.tabDesk} {
    font-size: 18px;
    line-height: 1.39;
  }

  @media ${device.desktop} {
    margin-bottom: 25px;

    &:nth-child(3) {
      margin-bottom: 40px;
    }
  }
`;

export const TextError = styled.p`
  margin-left: 10px;
  font-size: 16px;
  line-height: 1;
  color: var(--warning);
`;

export const ErrorBox = styled.div`
  position: absolute;
  margin-top: -34px;
  margin-left: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .error-icon {
    height: 16px;
  }
`;
