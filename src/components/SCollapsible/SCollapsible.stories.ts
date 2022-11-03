import type { Meta, Story } from "@storybook/vue3";
import { ref } from 'vue';
import SCollapsible from "./Index.vue";
import SButton from "../SButton/Index.vue";

interface SCollapsibleProps {
  height?: number,
  isOpened: boolean,
  noHeader?: boolean,
  outsideClosable?: boolean
}

export default {
  title: "Components/SCollapsible",
  component: SCollapsible
} as Meta<typeof SCollapsible>;

const Template: Story<SCollapsibleProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SButton, SCollapsible },

  setup () {
    return {
      args,
      isOpenedValue: ref(args.isOpened)
    }
  },

  template: `
    <s-button v-if="args.noHeader" @click="isOpenedValue = !isOpenedValue">header toggle</s-button>

    <s-collapsible v-bind='args' :is-opened="isOpenedValue" @toggle="v => isOpenedValue = v">
      <div class="item">11111</div>
      <div class="item">22222</div>
      <div class="item">33333</div>
      <div class="item">44444</div>
      <div class="item">55555</div>
    </s-collapsible>
  `
})

export const Default = Template.bind({});
export const Height = Template.bind({});
export const NoHeader = Template.bind({});
export const OutsideClosable = Template.bind({});

Default.args = { isOpened: false }
Height.args = { ...Default.args, height: '300' }
NoHeader.args = { ...Default.args, noHeader: true }
OutsideClosable.args = { ...Default.args, outsideClosable: true }




