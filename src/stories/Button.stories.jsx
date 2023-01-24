import React from "react";
import { AiFillBug } from "react-icons/ai";
import { Button } from "./conponents/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Button",
  size: "medium",
  icon: <AiFillBug />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Button",
  icon: <AiFillBug />,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
  icon: <AiFillBug />,
};

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
