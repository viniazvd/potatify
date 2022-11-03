import type {Meta, Story} from "@storybook/vue3";
import SAlert from "./Index.vue";

export default { title: "Components/Alert", component: SAlert } as Meta<typeof SAlert>;

const Template: Story<{
  msg: string
}> = (args) => ({
  components: { SAlert },

  setup () {
    return { args };
  },

  template: "<SAlert v-bind='args'/>"
})

export const Msg = Template.bind({});
export const Header = Template.bind({});
export const Positive = Template.bind({});
export const Negative = Template.bind({});

Msg.args = {
  msg: "msg test"
}

Header.args = {
  msg: "msg test",
  header: "header test",
}

Positive.args = {
  msg: "msg test",
  header: "header test",
  positive: true
}

Negative.args = {
  msg: "msg test",
  header: "header test",
  negative: true
}
