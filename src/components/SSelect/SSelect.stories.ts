import { ref } from 'vue'
import SSelect from "./Index.vue";
import type { Meta, Story } from "@storybook/vue3";

interface SSelectProps {
  value: boolean,
  label?: string,
  disabled?: boolean
  // negative?: boolean,
}

export default { title: "Form/SSelect", component: SSelect } as Meta<typeof SSelect>;

const Template: Story<SSelectProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SSelect },

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




