import React from "react"

import Bio from "./"

export default {
  title: "components/Bio",
  component: Bio,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const Template = args => <Bio {...args} />

export const Default = Template.bind({})
Default.args = {
  author: {
    name: "Luis Duenas",
    summary: "Software developer",
    url: "https://github.com/luisduenas",
    social: {
      name: "Github",
      icon: "github",
    },
  },
}
