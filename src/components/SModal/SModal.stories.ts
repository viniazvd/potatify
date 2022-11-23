import { ref } from 'vue'
import type { Meta, Story } from "@storybook/vue3"
import SModal from "./Index.vue"
import SButton from "../SButton/SButton.vue";

interface SModalProps {
  isOpened: boolean,
  title?: string,
  disabled?: boolean,
  noClose?: boolean,
  noHeader?: boolean,
  fullscreen?: boolean,
  hasScrollShadow?: boolean,
  noOverlay?: boolean,
}

export default {
  title: "Components/SModal",
  component: SModal,
} as Meta<typeof SModal>

const Template: Story<SModalProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SModal, SButton },

  setup () {
    return {
      args,
      isOpenedValue: ref(args.isOpened)
    }
  },

  template: `
    <s-button @click="isOpenedValue = !isOpenedValue">open</s-button>

    <s-modal
      v-bind='args'
      :is-opened="isOpenedValue"
      @close="isOpenedValue = false"
    >
      content value
    </s-modal>
  `
})

export const Default = Template.bind({})
export const Title = Template.bind({})
export const NoClose = Template.bind({})
export const Disabled = Template.bind({})
export const NoHeader = Template.bind({})
export const NoOverlay = Template.bind({})
// export const Fullscreen = Template.bind({})
export const HasScrollShadow = Template.bind({})



Default.args = { isOpened: false }
Title.args = { ...Default.args, title: 'title value' }
NoClose.args = { ...Default.args, noClose: true }
Disabled.args = { ...Default.args, disabled: true }
NoHeader.args = { ...Default.args, noHeader: true }
NoOverlay.args = { ...Default.args, noOverlay: true }
// Fullscreen.args = { ...Default.args, fullscreen: true }
HasScrollShadow.args = { ...Default.args, hasScrollShadow: true }




