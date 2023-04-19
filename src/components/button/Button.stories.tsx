import type { Meta, StoryObj, Decorator, Parameters } from "@storybook/react";

import { Button } from "./Button";
import { FlataProvider, flataTheme } from "../../theme";

const meta: Meta<typeof Button> = {
  title: "Flata/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    children: "Primary Button",
    onClick: () => console.log("Primary Button Clicked"),
    variant: "primary",
  },
  decorators: [
    (Story) => (
      <FlataProvider theme={flataTheme}>
        <Story />
      </FlataProvider>
    ),
  ],
  parameters: {
    controls: {
      controls: {
        hideNoControlsWarning: true,
        expanded: true,
        hide: ["ref", "render", "theme"],
      },
    },
  },
};
