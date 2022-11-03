import type {Meta, Story} from "@storybook/vue3";
import SCard from "./Index.vue";

export default { title: "Components/SCard", component: SCard } as Meta<typeof SCard>;

const Template: Story<{
  noHover: boolean,
  noBorder: boolean,
  borderColor: string,
  backgroundColor: string
}> = (args) => ({
  components: { SCard },

  setup () {
    return { args };
  },

  template: "<SCard v-bind='args'>COEEEEEEE</SCard>",
})

export const NoHover = Template.bind({});
export const NoBorder = Template.bind({});
export const BorderColor = Template.bind({});
export const BackgroundColor = Template.bind({});

NoHover.args = { noHover: true }
NoBorder.args = { noBorder: true }
BorderColor.args = { borderColor: 'red' }
BackgroundColor.args = { backgroundColor: 'blue' }
