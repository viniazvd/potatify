import type { Meta, Story } from "@storybook/vue3";
import { ref } from 'vue';
import SInput from "./Index.vue";

export default {
  title: "Form/SInput",
  component: SInput,
  args: {
    value: '',
    placeholder: 'Digite algo aqui'
  }
} as Meta<typeof SInput>;

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SInput },

  setup () {
    return {
      args,
      inputValue: ref(args.value)
    }
  },

  template: `<s-input v-bind='args' :value="inputValue" @input="v => inputValue = v.target?.value" />`
});

export const Default = Template.bind({});
export const Small = Template.bind({});
export const Larger = Template.bind({});
export const Icon = Template.bind({});
export const RightIcon = Template.bind({});
export const Button = Template.bind({});
export const ButtonIcon = Template.bind({});
export const Disabled = Template.bind({});
export const Round = Template.bind({});
export const TextArea = Template.bind({});
export const IsMoney = Template.bind({});
export const FloatLabel = Template.bind({});
export const Mask = Template.bind({});
export const Raw = Template.bind({});

Default.args = { label: 'label teste' }
Small.args = { ...Default.args, small: true }
Larger.args = { ...Default.args, larger: true }
Icon.args = { ...Default.args, icon: 'carbon:star' }
RightIcon.args = { ...Default.args, rightIcon: 'carbon:star' }
Button.args = { ...Default.args, button: 'Salvar' }
ButtonIcon.args = { ...Default.args, button: 'Salvar', buttonIcon: 'carbon:star' }
Disabled.args = { ...Default.args, disabled: true }
Round.args = { ...Default.args, round: true }
TextArea.args = { ...Default.args, textArea: true }
IsMoney.args = { ...Default.args, isMoney: true }
FloatLabel.args = { ...Default.args, floatLabel: true }
Mask.args = { ...Default.args, mask: '####-####' }
Raw.args = { ...Default.args, raw: true }




