import type {Meta, Story} from "@storybook/vue3";
import SLoader from "./Index.vue";

export default { title: "Components/SLoader", component: SLoader } as Meta<typeof SLoader>;

const Template: Story<{}> = (args) => ({
  components: { SLoader },

  setup () {
    return { args };
  },

  template: "<SLoader v-bind='args' />",
})

export const Default = Template.bind({});

Default.args = {}
