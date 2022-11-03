import type {Meta, Story} from "@storybook/vue3";
import SBadge from "./Index.vue";

export default { title: "Components/SBadge", component: SBadge } as Meta<typeof SBadge>;

const Template: Story<{ primary: boolean, dot: boolean, content: string }> = (args) => ({
  components: { SBadge },

  setup () {
    return { args };
  },

  template: "<SBadge v-bind='args'>teste</SBadge>",
})

export const Dot = Template.bind({});
// export const Icon = Template.bind({});
export const Content = Template.bind({});

Dot.args = {
  dot: true,
}

// Icon.args = {
//   size: "g",
// }

Content.args = {
  content: "3",
}
