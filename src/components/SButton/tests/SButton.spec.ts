import {afterEach, describe as when} from "vitest";
import {shallowMount, VueWrapper} from "@vue/test-utils";
import SButton from "../SButton.vue";
import {BUTTON_VARIANTS} from "../interfaces/ButtonVariants.enum";

let wrapper: VueWrapper;
const findButton = () => wrapper.find("[data-testid=SButton]")

afterEach(() => wrapper.unmount())

when("I create a button", () => {
  it("Should exist with a tag button", () => {
    wrapper = shallowMount(SButton);

    const SButtonEl = findButton();

    expect(SButtonEl.element.tagName).toEqual("BUTTON");
  })

  it("Should have a disabled prop with a class", () => {
    wrapper = shallowMount(SButton, {
      props: {
        disabled: true
      }
    });

    const SButtonEl = findButton()
    expect(SButtonEl.attributes()).toContain({ disabled: "" })
  })

  it.each([
    { variant: BUTTON_VARIANTS.CONTAINED, expectedClass: "contained" },
    { variant: BUTTON_VARIANTS.OUTLINED, expectedClass: "outlined" },
  ])("Should add a class according to the variant when I add the prop $variant", ({ variant, expectedClass }) => {
    wrapper = shallowMount(SButton, {
      props: {
        variant: variant
      }
    });

    const SButtonEl = findButton();
    expect(SButtonEl.classes()).toEqual(expect.arrayContaining([expectedClass]))
  })

  it("Should add block property when defined in props", () => {
    wrapper = shallowMount(SButton, {
      props: {
        block: true
      }
    });

    const SButtonEl = findButton();
    expect(SButtonEl.classes()).toEqual(expect.arrayContaining(["block"]))
  })
})