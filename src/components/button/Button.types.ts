import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any;
  children: React.ReactNode;
}

declare class Button extends React.Component<ButtonProps> {}
export default Button;
