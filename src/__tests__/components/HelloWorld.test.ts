import { mount } from "@vue/test-utils";
import HelloWorld from "src/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  const message = "Hello Message";

  it("Should render the page correct", () => {
    const helloWorld = mount(HelloWorld, {
      props: { msg: message }
    })

    expect(helloWorld.text()).toContain(message)
  })

  it("Should count correctly", async () => {
    const incrementButton = "[data-testid=increment-button]";

    const helloWorld = mount(HelloWorld, {
      props: { msg: message }
    });

    const incrementButtonEl = helloWorld.find(incrementButton);

    expect(incrementButtonEl.text()).toContain("0");

    await incrementButtonEl.trigger("click")

    expect(incrementButtonEl.text()).toContain("1")
  })
})
