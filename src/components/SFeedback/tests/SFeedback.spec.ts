import { beforeEach, describe as when, expect, it,  } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import SFeedback from "../SFeedback.vue";
import {createTestingPinia} from "@pinia/testing";
import {useFeedbacks} from "../../../composables";
import {nextTick} from "vue";

let wrapper: VueWrapper;

const global = {
  plugins: [
    createTestingPinia({
      stubActions: false,
      initialState: {
        feedbacks: {
          feedbacks: []
        }
      }
    })
  ]
}

const feedbackStore = useFeedbacks();
beforeEach(() => {
  wrapper?.unmount();
  feedbackStore.$patch({ feedbacks: [] });
});

const findSFeedback = () => wrapper.find("[data-testid=SFeedback]")
const findAvatar = () => wrapper.find("[data-testid=SFeedbackAvatar]");

const sleep = (duration: number) => new Promise(r => setTimeout(r, duration));

when("I render an avatar style feedback", () => {
  it("Should have a rendered an avatar with src and alt in slot", async () => {
    wrapper = shallowMount(SFeedback, {
      global
    });

    feedbackStore.createFeedback({
      avatar: {
        src: "http://localhost",
        alt: "un alt"
      },
      message: "my message"
    });

    await nextTick();
    const sFeedback = findSFeedback();
    const sFeedbackAvatar = findAvatar();

    expect(sFeedback.exists()).toBe(true)
    expect(sFeedbackAvatar.exists()).toBe(true)
  })

  it("Shouldn't have a picture inside the dom", async () => {
    wrapper = shallowMount(SFeedback, {
      global
    });

    feedbackStore.createFeedback({
      message: "my message"
    });

    await nextTick();
    const sFeedback = findSFeedback();
    const sFeedbackAvatar = findAvatar();

    expect(sFeedback.exists()).toBe(true)
    expect(sFeedbackAvatar.exists()).toBe(false)
  })

});

when("I render a feedback with messages", () => {
  const findFeedbackTitle = () => wrapper.find("[data-testid=SFeedbackTitle]");
  const findFeedbackMessage = () => wrapper.find("[data-testid=SFeedbackMessage]");
  const findFeedbackDescription = () => wrapper.find("[data-testid=SFeedbackDescription]");

  it("Should have a message, title and description", async () => {
    wrapper = shallowMount(SFeedback, {
      global
    });

    feedbackStore.createFeedback({
      message: "my message",
      title: "my title",
      description: "my duration"
    });

    await nextTick();


    const sFeedbackTitle = findFeedbackTitle();
    const sFeedbackMessage = findFeedbackMessage();
    const sFeedbackDescription = findFeedbackDescription();
    const sFeedbackAvatar = findAvatar();

    expect(sFeedbackAvatar.exists()).toBe(false);
    expect(sFeedbackTitle.exists()).toBe(true);
    expect(sFeedbackTitle.text()).toBe("my title");
    expect(sFeedbackMessage.exists()).toBe(true);
    expect(sFeedbackMessage.text()).toBe("my message");
    expect(sFeedbackDescription.exists()).toBe(true);
    expect(sFeedbackDescription.text()).toBe("my duration");
  })

  it("Should not have title, avatar and description", async () => {
    wrapper = shallowMount(SFeedback, {
      global
    });

    feedbackStore.createFeedback({
      message: "my message",
    });

    await nextTick();

    const sFeedbackTitle = findFeedbackTitle();
    const sFeedbackMessage = findFeedbackMessage();
    const sFeedbackDescription = findFeedbackDescription();
    const sFeedbackAvatar = findAvatar();

    expect(sFeedbackAvatar.exists()).toBe(false)
    expect(sFeedbackTitle.exists()).toBe(false)
    expect(sFeedbackDescription.exists()).toBe(false)

    expect(sFeedbackMessage.exists()).toBe(true)
  })
});

when("I click to close the feedback", () => {
  it("Should close the feedback and remove feedback from view", async () => {
    wrapper = shallowMount(SFeedback, {
      global
    });

    feedbackStore.createFeedback({
      message: "my message",
      title: "my title",
      description: "my duration"
    });

    await nextTick();
    let sFeedback = findSFeedback();

    expect(sFeedback.exists()).toBe(true);
    expect(feedbackStore.feedbacks).length(1)

    const sButtonClose = wrapper.find("[data-testid=SFeedbackClose]");
    await sButtonClose.trigger("click")

    await nextTick();

    sFeedback = findSFeedback();

    expect(feedbackStore.feedbacks).length(0)
    expect(sFeedback.exists()).toBeFalsy();
  })
});

when("I choose to have a location for the notification", () => {
  it("Should have a default location of top right when no location is informed", async () => {
    wrapper = shallowMount(SFeedback, {
      global,
    });

    feedbackStore.createFeedback({
      message: "my message",
    });

    await nextTick();

    const sFeedback = findSFeedback();

    expect(feedbackStore.feedbacks).length(1)

    expect(sFeedback.classes()).toContain("top");
    expect(sFeedback.classes()).toContain("right");
  });

  it.each([
    // RIGHT POSITION WITH VARIABLE Y
    { positions: ["top", "right"] },
    { positions: ["bottom", "right"] },
    { positions: ["middle", "right"] },
    // LEFT POSITION WITH VARIABLE Y
    { positions: ["top", "left"] },
    { positions: ["bottom", "left"] },
    { positions: ["middle", "left"] },
    // CENTER POSITION WITH VARIABLE Y
    { positions: ["top", "center"] },
    { positions: ["bottom", "center"] },
    { positions: ["middle", "center"] },
  ])
  ("Should be positioned at the $positions", async ({ positions }) => {
    wrapper = shallowMount(SFeedback, {
      global,
    });

    const [ yPosition, xPosition ] = positions;

    feedbackStore.createFeedback({
      message: "my message",
      yPosition: yPosition as any,
      xPosition: xPosition as any
    });

    await nextTick();

    const sFeedback = findSFeedback();

    expect(feedbackStore.feedbacks).length(1)

    expect(sFeedback.classes()).toContain(yPosition);
    expect(sFeedback.classes()).toContain(xPosition);
  })
});

when("I render multiple feedbacks", () => {
  it("Should render 2 feedbacks", async () => {
    wrapper = shallowMount(SFeedback, {
      global,
    });

    feedbackStore.createFeedback({
      message: "my message",
    });

    feedbackStore.createFeedback({
      message: "my message",
    });

    await nextTick();

    const sFeedback = wrapper.findAll("[data-testid=SFeedback]");

    expect(feedbackStore.feedbacks).length(2);
    expect(sFeedback.length).toEqual(2)
  })

  it("Should render no more than 5 feedbacks at time", async () => {
    wrapper = shallowMount(SFeedback, {
      global,
    });

    for (let i = 0; i < 6; i++) {
      feedbackStore.createFeedback({
        message: "my message",
      });
    }

    await nextTick();

    const sFeedback = wrapper.findAll("[data-testid=SFeedback]");

    expect(feedbackStore.feedbacks).length(5);
    expect(sFeedback.length).toEqual(5)
  })
});

when("I render a timed feedback", () => {
  it("Should clear the array of notifications automagically", async () => {
    wrapper = shallowMount(SFeedback, {
      global,
    });

    for (let i = 0; i < 3; i++) {
      feedbackStore.createFeedback({
        message: "my message",
      });
    }

    await nextTick();
    expect(feedbackStore.feedbacks).length(3);

    await sleep(1000);
    await nextTick();
    const sFeedback = wrapper.findAll("[data-testid=SFeedback]");

    expect(feedbackStore.feedbacks).length(0);
    expect(sFeedback.length).toEqual(0)
  })

  it.each([
    { duration: 2000 },
    { duration: 1000 },
    { duration: 4000 }
  ])
  ("Should clear the array of notifications automagically after the duration specified", async ({ duration }) => {
    wrapper = shallowMount(SFeedback, {
      global,
    });

    feedbackStore.createFeedback({
      message: "my message",
      duration: duration
    });

    await nextTick();
    expect(feedbackStore.feedbacks).length(1);

    await sleep(duration);
    await nextTick();
    const sFeedback = wrapper.findAll("[data-testid=SFeedback]");

    expect(feedbackStore.feedbacks).length(0);
    expect(sFeedback.length).toEqual(0)
  })
})