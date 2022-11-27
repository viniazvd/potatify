import {afterEach, describe as when, expect} from "vitest";
import {shallowMount, VueWrapper} from "@vue/test-utils";
import SCardV2 from "./SCardV2.vue";

let wrapper: VueWrapper;

afterEach(() => {
  wrapper.unmount();
})

function getSCard () {
  return wrapper.find("[data-testid=cardV2]")
}

// PUBLIC DEV API
when.skip("No props are informed", () => {
  it("Should render with defaults", () => {
    wrapper = shallowMount(SCardV2);

    const SCard = getSCard();

    expect(SCard.classes())
      .toContain("card-padding")
  })
})

when.skip("Props are modified", () => {
  it("Should have no padding", () => {
    wrapper = shallowMount(SCardV2, {
      props: {
        noPadding: true
      }
    });

    const SCard = getSCard();
    expect(SCard.classes())
      .not.toContain("card-padding")
  })

  it("Should change the colours", () => {
    wrapper = shallowMount(SCardV2, {
      props: {
        backgroundColor: "primary"
      }
    })

    const SCard = getSCard();
    expect(SCard.classes()).toContain("bg-primary")
  })
})