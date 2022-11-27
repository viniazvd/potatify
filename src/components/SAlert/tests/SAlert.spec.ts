import {afterEach, describe as when} from "vitest";
import {shallowMount, VueWrapper} from "@vue/test-utils";
import SAlert from "../SAlert.vue";
import {nextTick} from "vue";

let wrapper: VueWrapper;
afterEach(() => wrapper.unmount());

const findAlert = () => wrapper.find("[data-testid=SAlert]")
const findTitle = () => findAlert().find("[data-testid=title]");

when("I want a title for my alert", () => {
  it
  .each(["This is a title", "this is a second title"])
  ("Should render the title I've put in props", (title) => {
    wrapper = shallowMount(SAlert, {
      props: {
        title
      }
    });

    const sAlertTitle = findTitle();

    expect(sAlertTitle.text()).toEqual(title)
  })
})

when("I want a message for my alert", () => {
  const findMessage = () => findAlert().find("[data-testid=message]");

  it
  .each(["i have a message", "I want a message"])
  ("should render the message correctly", (message) => {
    wrapper = shallowMount(SAlert, {
      props: {
        title: "algo",
        message
      }
    })

    const sAlertMessage = findMessage();

    expect(sAlertMessage.text()).toEqual(message)
  })

  it("Shouldn't render message when no message is sent", () => {
    wrapper = shallowMount(SAlert, { props: { title: "" } });

    const sAlertMessage = findMessage();

    expect(sAlertMessage.exists()).toBeFalsy()
  })
})

when("I need an icon for my alert", () => {
  const findIcon = () => findAlert().find("[data-testid=icon]");

  it
  .each(["mdi:alert", "mdi:info"])
  ("Should have an icon defined", (icon) => {
    wrapper = shallowMount(SAlert, { props: { title: "", icon } });

    const sAlertIcon = findIcon();
    expect(sAlertIcon.exists()).toBe(true);
    expect(sAlertIcon.attributes()).toHaveProperty("icon", icon);
  })

  it("Should not have an icon when no icon prop is sent", () => {
    wrapper = shallowMount(SAlert, { props: { title: "" } });

    const sAlertIcon = findIcon();
    expect(sAlertIcon.exists()).toBe(false);
  })
})

when("I want to customize the alert", () => {
  it("Should have an title slot", () => {
    wrapper = shallowMount(SAlert, {
      props: { title: "is this a title" },
      slots: {
        title: `
          <template v-slot="{ title }">
            <p>My title {{ title }}</p>
          </template>`
      }
    });

    const sAlertTitle = findTitle();

    expect(sAlertTitle.text()).toBe("My title is this a title")
  })

  it("Should have an actions slot", () => {
    wrapper = shallowMount(SAlert, {
      props: { title: "" },
      slots: {
        actions: `
          <template>
            I have an actions slot now
          </template>  
        `
      }
    })

    const sAlertActions = findAlert().find("[data-testid=actions]");

    expect(sAlertActions.text()).toBe("I have an actions slot now")
  })
})