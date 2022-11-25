import {afterEach, describe} from "vitest";
import {shallowMount, VueWrapper} from "@vue/test-utils";
import SRating from "../SRating.vue";
import {nextTick} from "vue";

const when = describe;
let wrapper: VueWrapper<SRating>;
const getRatingElements = () => wrapper.findAll("[data-testid=star]");
const getActiveRatingElements = () => wrapper.findAll("[data-testid=star].active");
const getSummary = () => wrapper.find("[data-testid=summary]");

afterEach(() => {
  wrapper.unmount()
});

when("Only the mandatory arguments are passed", () => {


  it("should create a 5 star rating with no defined rating", () => {
    wrapper = shallowMount(SRating);
    const elements = getRatingElements();

    expect(elements.length).toBe(5)
  })

  it("should have a description saying that no rating was given", () => {
    wrapper = shallowMount(SRating);
    const summary = getSummary();

    expect(summary.text()).toBe("No rating was given")
  })
})

when("It is informed a rating", () => {
  it.each([
    { maxRating: 10, currentRating: 2, expected: "2 out of 10" },
    { maxRating: 7, currentRating: 5, expected: "5 out of 7" },
    { maxRating: 5, currentRating: 5, expected: "5 out of 5" }
  ])("should change the summary to show what rating was selected", ({ maxRating, currentRating, expected }) => {
    wrapper = shallowMount(SRating, {
      props: {
        currentRating,
        maxRating
      }
    })
    const summary = getSummary();

    expect(summary.text())
      .toBe(expected)
  })

  it("Should mark as active the same number the prop has received", () => {
    wrapper = shallowMount(SRating, {
      props: {
        currentRating: 2
      }
    });
    const activeElements = getActiveRatingElements();

    expect(activeElements.length).toBe(2)
  })
})

when("It clicks on an element", () => {
  it("Should emit an event containing the star number and change the stars", async () => {
    wrapper = shallowMount(SRating);
    const [oneStar, twoStars, threeStars] = getRatingElements();

    await threeStars.trigger("click");
    await nextTick()

    const summary = getSummary();
    const [[eventPayload]] = wrapper.emitted("change:rating")!;
    expect((eventPayload as { rating: number }).rating).toBe(3)

    expect(summary.text()).toBe("3 out of 5")
  })
})

when("I want an icon", () => {
  it("Should be an star if no icon is sent", () => {
    wrapper = shallowMount(SRating);

    const sIconElement = wrapper.find("[data-testid=SRatingIcon]");

    expect(sIconElement.attributes("icon")).toEqual("mdi:star")
  })

  it
  .each(["mdi:house", "mdi:wallet"])
  ("Should be a specified icon %s", (icon) => {
    wrapper = shallowMount(SRating, {
      props: { icon }
    });

    const sIconElement = wrapper.find("[data-testid=SRatingIcon]");
    expect(sIconElement.attributes("icon")).toEqual(icon);
  })
})

when("I change the sise", () => {
  it
  .each([60, 160])
  ("Should have the size informed as %s", (size) => {
    wrapper = shallowMount(SRating, {
      props: { size }
    });

    const sIconElement = wrapper.find("[data-testid=SRatingIcon]");
    // props são recebidas como string
    expect(sIconElement.attributes("size")).toEqual(size.toString());
  })
})