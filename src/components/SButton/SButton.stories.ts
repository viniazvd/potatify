import type {Meta, Story} from "@storybook/vue3";
import SButton from "./Index.vue";
import {BTN_SIZES, BTN_VARIANTS} from "./SButton.dto";

export default {
  title: "Form/SButton",
  component: SButton,
  argTypes: {
    size: {
      name: "Tamanho",
      defaultValue: BTN_SIZES.MD,
      options: Object.values(BTN_SIZES),
      control: { type: "select" }
    },
    variant: {
      name: "Variantes",
      defaultValue: BTN_VARIANTS.DEFAULT,
      options: Object.values(BTN_VARIANTS),
      control: { type: "select" }
    },
    color: {
      type: "string",
      defaultValue: "primary"
    },
    disabled: {
      name: "Desabilitado",
      defaultValue: false,
      type: "boolean"
    },
    loading: {
      name: "Loading state",
      defaultValue: false,
      type: "boolean"
    },
    link: {
      name: "Link",
      type: "string"
    }
  }
} as Meta<typeof SButton>

const Template: Story<{
  size: typeof BTN_SIZES[keyof typeof BTN_SIZES]
  variant: typeof BTN_VARIANTS[keyof typeof BTN_VARIANTS]
  disabled: Boolean
  link: String
  loading: Boolean
}> = (args) => ({
  components: { SButton },

  setup () {
    return { args };
  },

  template: "<SButton v-bind='args'>COEEEEEE</SButton>",
})

export const SButtonDefault = Template.bind({})