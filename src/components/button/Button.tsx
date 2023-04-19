import ButtonProps from "./Button.types";
import styled from "styled-components";

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors.primary[500]};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space[4] + " " + props.theme.space[8]};
  border-radius: ${(props) => props.theme.radius.default};
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: ${(props) => props.theme.lineHeights.md};
  border: 1px solid ${(props) => props.theme.colors.primary[500]};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.default};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary[600]};
    border-color: ${(props) => props.theme.colors.primary[600]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.primary[200]};
  }
`;
