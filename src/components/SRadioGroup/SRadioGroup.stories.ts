import { ref } from 'vue'
import SRadioGroup from "./Index.vue";
import type { Meta, Story } from "@storybook/vue3";

interface SRadioGroupProps {
  value?: string,
  options: Array<{ id: number, label: string, value: string, disabled: boolean }>
}

export default { title: "Form/SRadioGroup", component: SRadioGroup } as Meta<typeof SRadioGroup>;

const Template: Story<SRadioGroupProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SRadioGroup },

  setup () {
    return {
      args,
      activeRadio: ref(args.value)
    }
  },

  template: `<s-radio-group v-bind="args" :value="activeRadio" @input="activeRadio = $event" />`
  // <s-stepper v-bind="args" @select="newStep => activeStep = newStep" />
})

export const Default = Template.bind({});

Default.args = {
  activeRadio: '111',
  options: [
    { id: 1, label: '111', value: '111' },
    { id: 2, label: '222', value: '222', disabled: true },
    { id: 3, label: '333', value: '333' },
    { id: 4, label: '444', value: '444' },
  ]
}




