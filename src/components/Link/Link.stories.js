import React from "react"

import Link from "./"

export default {
  title: "components/Link",
  component: Link,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const Template = args => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  to: "/",
  children: "Homepage",
}
