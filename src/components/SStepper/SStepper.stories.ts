import { ref } from 'vue'
import SStepper from "./Index.vue";
import type { Meta, Story } from "@storybook/vue3";

interface SStepperProps {
  step?: number,
  items: Array<{ label: string, icon: string, disabled: boolean }>
}

export default { title: "Components/SStepper", component: SStepper } as Meta<typeof SStepper>;

const Template: Story<SStepperProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SStepper },

  setup () {
    return {
      args,
      activeStep: ref(args.step)
    }
  },

  template: `<s-stepper v-bind="args" @select="newStep => activeStep = newStep" />`
})

export const Default = Template.bind({});

Default.args = {
  step: 1,
  items: [
    { label: 'item 1', icon: 'dollar-sign', disabled: false },
    { label: 'item 2', icon: 'link', disabled: false },
    { label: 'item 3', icon: 'shield', disabled: false },
    { label: 'item 4', icon: 'shield-off', disabled: true },
    { label: 'item 5', icon: 'cart', disabled: false }
  ]
}




