import { ref } from 'vue'
import SSwitch from "./Index.vue";
import type { Meta, Story } from "@storybook/vue3";

interface SSwitchProps {
  value: boolean,
  label?: string,
  disabled?: boolean
  // negative?: boolean,
}

export default { title: "Form/SSwitch", component: SSwitch } as Meta<typeof SSwitch>;

const Template: Story<SSwitchProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SSwitch },

  setup () {
    return {
      args,
      switchValue: ref(args.value)
    }
  },

  template: `<s-switch v-bind="args" v-model="switchValue" />`
})

export const Default = Template.bind({});
export const Label = Template.bind({});
export const Disabled = Template.bind({});
// export const Negative = Template.bind({});

Default.args = { value: true }
Label.args = { ...Default.args, label: 'teste label' }
Disabled.args = { ...Default.args, disabled: true }
// Negative.args = { ...Default.args, negative: true }




