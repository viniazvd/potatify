import {describe as when} from "vitest";
import {shallowMount, VueWrapper} from "@vue/test-utils";
import SChip from "../Index.vue";
import {CHIP_SIZES} from "../interfaces/chip-sizes.enum";
import {nextTick} from "vue";
import {emitted} from "@vue/test-utils/dist/emit";

let wrapper: VueWrapper;
const findSChip = () => wrapper.find("[data-testid=SChip]")
const findSChipClearableButton = () => wrapper.find("[data-testid=clearable]")

when("I create a chip", () => {
  it.each([
    { value: CHIP_SIZES.SM, expectation: "small" },
    { value: CHIP_SIZES.MD, expectation: "medium" },
    { value: CHIP_SIZES.LG, expectation: "large" },
  ])("Should create a chip with size $value", ({ expectation, value }) => {
    wrapper = shallowMount(SChip, {
      props: {
        size: value
      }
    });

    const SChipComp = findSChip();
    expect(SChipComp.classes()).toContain(expectation);
  })
})

when("I create a clearable chip", () => {
  it("Should have a button", () => {
    wrapper = shallowMount(SChip, {
      props: {
        clearable: true
      }
    })

    const SChipComp = findSChipClearableButton();

    expect(SChipComp).toBeDefined()
  })
})