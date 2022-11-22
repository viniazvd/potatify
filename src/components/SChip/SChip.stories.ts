import SChip from "./Index.vue";
import {CHIP_SIZES} from "./interfaces/chip-sizes.enum";
import {Meta, Story} from "@storybook/vue3";

export default {
  title: "Components/SChip",
  component: SChip,
  argTypes: {
    size: {
      name: "Sizes",
      options: Object.values(CHIP_SIZES),
      control: { type: "select" },
      defaultValue: CHIP_SIZES.MD
    },
    clearable: {
      name: "Clearable chip",
      defaultValue: false,
      control: { type: "boolean" }
    }
  }
} as Meta<typeof SChip>;

const Template: Story<typeof SChip> = (args) => ({
  components: { SChip },
  setup () { return { args } },
  template: "<SChip v-bind='args'>Um chip</SChip>"
});

export const SChipDefault = Template.bind({});