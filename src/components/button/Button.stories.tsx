import type { Meta, StoryObj, Decorator, Parameters } from "@storybook/react";

import { Button } from "./Button";
import { FlataProvider, flataTheme } from "../../theme";

const meta: Meta<typeof Button> = {
  title: "Flata/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button Clicked"),
    variant: "primary",
    size: "medium",
  },
  decorators: [
    (Story) => (
      <FlataProvider theme={flataTheme}>
        <Story />
      </FlataProvider>
    ),
  ],
};
