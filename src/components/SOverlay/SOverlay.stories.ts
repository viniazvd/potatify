import SOverlay from "./Index.vue";
import type { Meta, Story } from "@storybook/vue3";

interface SOverlayProps {
  show?: number,
  dark?: boolean,
  transparent?: boolean
}

export default {
  title: "Components/SOverlay",
  component: SOverlay,
  args: { show: true }
} as Meta<typeof SOverlay>;

const Template: Story<SOverlayProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SOverlay },

  setup () {
    return {
      args
    }
  },

  template: `<SOverlay v-bind='args' />`
})

export const Default = Template.bind({});
export const Dark = Template.bind({});
export const Transparent = Template.bind({});

Default.args = { show: true }
Dark.args = { ...Default.args, dark: true }
Transparent.args = { ...Default.args, transparent: true }




