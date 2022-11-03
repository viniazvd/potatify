// import type {Meta, Story} from "@storybook/vue3";
// import SCarousel from "./Index.vue";

// export default { title: "Components/SCarousel", component: SCarousel } as Meta<typeof SCarousel>;

// const items = [
//   { color: 'blue' },
//   { color: 'yellow' },
//   { color: 'red' },
//   { color: 'black' },
//   { color: 'pink' },
//   { color: 'turquoise' },
//   { color: 'magenta' },
//   { color: 'white' },
//   { color: 'orange' },
//   { color: 'green' },
//   { color: 'purple' },
//   { color: 'cyan' },
//   { color: 'lime' },
//   { color: 'lightblue' }
// ]

// const breakpoints = {
//   1024: { perPage: 4 },
//   768: { perPage: 3 },
//   640: { perPage: 2 },
//   320: { perPage: 1 }
// }

// const Template: Story<{
//   noHover: boolean,
//   noBorder: boolean,
//   borderColor: string,
//   backgroundColor: string
// }> = (args) => ({
//   components: { SCarousel },

//   setup () {
//     return { args, items, breakpoints };
//   },

//   template: `<s-carousel
//     has-shadow
//     controllers
//     :items="items"
//     :per-page="2"
//     :is-loopable="false"
//     :breakpoints="breakpoints"
//   >
//     <div slot-scope="{ item }" class="ball" :style="{ backgroundColor: item.color }"></div>
//   </s-carousel>`,
// })

// export const Default = Template.bind({});

// Default.args = {
//   items,
//   breakpoints
// }
