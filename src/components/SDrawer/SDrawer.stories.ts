import { ref } from 'vue'
import type { Meta, Story } from "@storybook/vue3"
import SDrawer from "./Index.vue"
import SButton from "../SButton/Index.vue";

interface SDrawerProps {
  isOpened: boolean,
  noOverlay?: boolean,
  direction?: string,
  width?: string,
}

export default {
  title: "Components/SDrawer",
  component: SDrawer,
} as Meta<typeof SDrawer>

const Template: Story<SDrawerProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SDrawer, SButton },

  setup () {
    return {
      args,
      isOpenedValue: ref(args.isOpened)
    }
  },

  template: `
  <s-button @click="isOpenedValue = !isOpenedValue">open</s-button>

  <s-drawer v-bind='args' :is-opened="isOpenedValue" @close="isOpenedValue = false">
    drawer content
  </s-drawer>
  `
})

export const Default = Template.bind({})
export const DirectionRight = Template.bind({})
export const Width = Template.bind({})
// export const NoOverlay = Template.bind({})

Default.args = { isOpened: false }
DirectionRight.args = { ...Default.args, direction: 'right' }
Width.args = { ...Default.args, width: '200px' }
// NoOverlay.args = { ...Default.args, noOverlay: true }




