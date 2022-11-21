import type {Meta, Story} from "@storybook/vue3";
import SAvatar from "./SAvatar.vue";
import {S_AVATAR_VARIANTS} from "./interfaces/SAvatar.variants";

export default {
  title: "Components/SAvatar",
  component: SAvatar,
  argTypes: {
    variant: {
      name: "Variants",
      options: Object.values(S_AVATAR_VARIANTS),
      control: { type: "select" }
    },
    src: {
      name: "Source image",
      defaultValue: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    alt: {
      name: "Alternate name (for SR)",
      defaultValue: "Generic Person"
    },
    size: {
      name: "Image size",
      type: Number,
      control: { type: "number" }
    }
  }
} as Meta<typeof SAvatar>;

const Template: Story<typeof SAvatar> = (args) => ({
  components: { SAvatar },
  setup () {
    return { args }
  },
  template: "<s-avatar v-bind='args'/>"
})

export const SAvatarDefault = Template.bind({})