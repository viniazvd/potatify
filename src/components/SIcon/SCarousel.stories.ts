import type {Meta, Story} from "@storybook/vue3";
import SIcon from "./Index.vue";

export default { title: "Components/SIcon", component: SIcon } as Meta<typeof SIcon>;

const Template: Story<{
  icon: string,
  disabled: boolean,
  primaryColor: boolean,
  // secondaryColor: boolean
}> = (args) => ({
  components: { SIcon },

  setup () {
    return { args };
  },

  template: "<SIcon v-bind='args' />",
})

export const Icon = Template.bind({});
export const Disabled = Template.bind({});
// export const PrimaryColor = Template.bind({});
// export const SecondaryColor = Template.bind({});

Icon.args = { icon: 'akar-icons:star' }
Disabled.args = { icon: 'akar-icons:star', disabled: true }
// PrimaryColor.args = { icon: 'akar-icons:star', primaryColor: true }
// SecondaryColor.args = { icon: 'akar-icons:star', secondaryColor: true }
