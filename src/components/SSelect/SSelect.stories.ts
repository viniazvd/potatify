import { ref } from 'vue'
import SSelect from "./Index.vue";
import type { Meta, Story } from "@storybook/vue3";

interface SSelectProps {
  value: boolean,
  label?: string,
}

export default { title: "Form/SSelect", component: SSelect } as Meta<typeof SSelect>;

const Template: Story<SSelectProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SSelect },

  setup () {
    return {
      args,
      value: ref(args.value)
    }
  },

  template: `<s-select v-bind="args" :value="value" @input="v => value = v" />`
})

export const Default = Template.bind({});
export const Multiple = Template.bind({});

Default.args = {
  'track-by':"slug",
  'display-by': "name",
  label: 'teste label',
  items: [
    { slug: 'item 1', name: 'name item 1' },
    { slug: 'item 2', name: 'name item 2' },
    { slug: 'item 22', name: 'name item 22' },
    { slug: 'item 3', name: 'name item 3' },
    { slug: 'item 4', name: 'name item 4' },
    { slug: 'item 5', name: 'name item 5' },
    { slug: 'item 6', name: 'name item 6' },
  ],
  value: { slug: 'item 3', name: 'name item 3' }
}

Multiple.args = { ...Default.args, multiple: true }





