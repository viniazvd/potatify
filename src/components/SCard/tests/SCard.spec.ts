import {describe as when} from "vitest";
import {shallowMount, VueWrapper} from "@vue/test-utils";
import SCardV2 from "../SCardV2.vue";

let wrapper: VueWrapper;
const findSCard = () => wrapper.find("[data-testid=SCard]");

when("I create a SCard", () => {

  it("Should have a padding and no background-color", () => {
    wrapper = shallowMount(SCardV2);
    const SCardComp = findSCard();

    expect(SCardComp.classes()).toContain("card-padding");
  })
})

when("I create a card with no padding", () => {
  it("Should include a class no-padding", () => {
    wrapper = shallowMount(SCardV2, {
      props: {
        noPadding: true
      }
    });

    const SCardComp = findSCard();

    expect(SCardComp.classes()).not.toContain("card-padding")
  })
})

when("I create a card and give a background color", () => {
  it.each([
    { colorArgument: "primary", expectation: "bg-primary" },
    { colorArgument: "secondary", expectation: "bg-secondary" },
    // @TODO ISSO CAUSA UM PROBLEMA. TRANSFORMAR EM STYLE
    { colorArgument: "#ff0", expectation: "bg-#ff0" },
  ])("Should have a class starting with bg", ({ colorArgument, expectation }) => {
    wrapper = shallowMount(SCardV2, {
      props: {
        backgroundColor: colorArgument
      }
    })

    const SCardComp = findSCard();

    expect(SCardComp.classes()).to.includes(expectation)
  });

})