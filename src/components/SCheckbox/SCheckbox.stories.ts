import type { Meta, Story } from "@storybook/vue3";
import { ref } from 'vue';
import SCheckbox from "./Index.vue";

interface CheckboxProps {
  value: boolean,
  label?: string,
  negative?: boolean,
  disabled?: boolean
}

export default {
  title: "Form/SCheckbox",
  component: SCheckbox,
  args: {
    value: false
  }
} as Meta;

const Template: Story<CheckboxProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SCheckbox },

  setup () {
    return {
      args,
      checkboxValue: ref(args.value)
    }
  },

  template: `<s-checkbox v-bind='args' :value="checkboxValue" @input="v => checkboxValue = v" />`
});

export const Default = Template.bind({});
export const Negative = Template.bind({});
export const Disabled = Template.bind({});

Default.args = { label: 'label teste' }
Negative.args = { ...Default.args, negative: true }
Disabled.args = { ...Default.args, disabled: true }




