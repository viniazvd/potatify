import type {Meta, Story} from "@storybook/vue3";
import SButton from "./Index.vue";

export default {
  title: "Form/SButton",
  component: SButton
} as Meta<typeof SButton>

const Template: Story<{
  // primaryIconColor: boolean,
  // secondaryIconColor: boolean,
  success: boolean,
  error: boolean,
  loading: boolean,
  disabled: boolean,
  link: boolean,
  small: boolean,
  large: boolean,
  outlined: boolean,
  rounded: boolean,
  icon: string,
}> = (args) => ({
  components: { SButton },

  setup () {
    return { args };
  },

  template: "<SButton v-bind='args'>COEEEEEE</SButton>",
})

// export const PrimaryIconColor = Template.bind({});
// export const SecondaryIconColor = Template.bind({});
export const Success = Template.bind({});
export const Error = Template.bind({});
export const Loading = Template.bind({});
export const Disabled = Template.bind({});
export const Link = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});
export const Outlined = Template.bind({});
export const Rounded = Template.bind({});
export const Icon = Template.bind({});

// PrimaryIconColor.args = { primaryIconColor: true }
// SecondaryIconColor.args = { secondaryIconColor: true }
Success.args = { success: true }
Error.args = { error: true }
Loading.args = { loading: true }
Disabled.args = { disabled: true }
Link.args = { link: true }
Small.args = { small: true }
Large.args = { large: true }
Outlined.args = { outlined: true }
Rounded.args = { rounded: true }
Icon.args = { icon: 'akar-icons:star' }
