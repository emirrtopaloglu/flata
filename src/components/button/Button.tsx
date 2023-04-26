import styled from "styled-components";

interface ButtonComponentProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "primary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "secondary"
    | "light"
    | "dark";
  size?: "small" | "medium" | "large";
  block?: boolean;
  outline?: boolean;
  tag?: "button" | "a";
}

type ButtonProps = ButtonComponentProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.RefAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.RefAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLAnchorElement>;

type DefaultPropsType = Required<ButtonProps>;

const DEFAULT_PROPS = {
  variant: "primary",
  size: "medium",
  block: false,
  outline: false,
  tag: "button",
} as DefaultPropsType;

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.outline
      ? "transparent"
      : props.theme.colors[props.variant || DEFAULT_PROPS.variant]["500"]};
  color: ${(props) => {
    if (props.variant == "light") {
      return props.theme.colors.secondary["900"];
    } else {
      if (props.outline) {
        return props.theme.colors[props.variant || DEFAULT_PROPS.variant][
          "500"
        ];
      } else {
        return props.theme.colors.white;
      }
    }
  }};
  border: 1px solid;
  border-color: ${(props) =>
    props.theme.colors[props.variant || DEFAULT_PROPS.variant]["500"]};
  border-radius: 4px;
  padding: ${(props) =>
    props.size === "small"
      ? "0.25rem 0.5rem"
      : props.size === "medium"
      ? "0.5rem 1rem"
      : "0.75rem 1.5rem"};
  width: ${(props) => (props.block ? "100%" : "auto")};
  font-size: ${(props) =>
    props.size === "small"
      ? props.theme.fontSizes["sm"]
      : props.size === "medium"
      ? props.theme.fontSizes["md"]
      : props.theme.fontSizes["lg"]};
  font-weight: 500;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  &:hover {
    background-color: ${(props) =>
      props.outline
        ? props.theme.colors[props.variant || DEFAULT_PROPS.variant]["100"]
        : props.theme.colors[props.variant || DEFAULT_PROPS.variant]["600"]};
  }

  &:active {
    background-color: ${(props) =>
      props.outline
        ? props.theme.colors[props.variant || DEFAULT_PROPS.variant]["200"]
        : props.theme.colors[props.variant || DEFAULT_PROPS.variant]["700"]};
  }

  &:focus {
    outline: none;
    box-shadow: ${(props) =>
      `0 0 0 3px ${
        props.theme.colors[props.variant || DEFAULT_PROPS.variant]["200"]
      }`};
  }

  &:disabled {
    background-color: ${(props) =>
      props.outline
        ? "transparent"
        : props.theme.colors[props.variant || DEFAULT_PROPS.variant]["300"]};
    border-color: ${(props) =>
      props.outline
        ? props.theme.colors[props.variant || DEFAULT_PROPS.variant]["300"]
        : "transparent"};
    color: ${(props) =>
      props.outline
        ? props.theme.colors[props.variant || DEFAULT_PROPS.variant]["300"]
        : props.theme.colors.white};
    cursor: not-allowed;
  }
`;

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props} variant={props.variant || DEFAULT_PROPS.variant}>
      {props.children}
    </StyledButton>
  );
};

// Path: src/components/button/Button.stories.tsx
