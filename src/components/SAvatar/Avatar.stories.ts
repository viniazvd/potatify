import type {Meta, Story} from "@storybook/vue3";
import SAvatar from "./Index.vue";

export default { title: "Components/SAvatar", component: SAvatar } as Meta<typeof SAvatar>;

const Template: Story<{ size: string, color: string }> = (args) => ({
  components: { SAvatar },

  setup () {
    return { args };
  },

  template: "<SAvatar v-bind='args'><div>coe</div></SAvatar>",
})

export const sizeP = Template.bind({});
export const sizeM = Template.bind({});
export const sizeG = Template.bind({});
// export const colorDark = Template.bind({});

sizeP.args = {
  size: "p"
}

sizeM.args = {
  size: "m",
}

sizeG.args = {
  size: "g",
}

// colorDark.args = {
//   size: "p",
//   color: "dark"
// }
