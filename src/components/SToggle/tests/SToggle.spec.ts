import {beforeEach, describe as when} from "vitest";
import {mount, shallowMount, VueWrapper} from "@vue/test-utils";
import SToggle from "../Index.vue";
import {nextTick, ref} from "vue";

let wrapper: VueWrapper;
const findSToggle = () => wrapper.find("[data-testid=SToggleParent]");
beforeEach(() => wrapper?.unmount());

const mountParent = (currentValue = true) => {
  return mount({
    data: () => ({
      toggleValue: currentValue
    }),
    components: { SToggle },
    template: `
        <div>
            <SToggle label="my label" v-model="toggleValue"></SToggle>
        </div>
      `
  });
}

when("I create a toggle button", () => {
  it("Should put the label exactly as informed in props", () => {
    wrapper = shallowMount(SToggle, {
      props: {
        label: "my label"
      }
    });

    const sToggleLabel = wrapper.find("[data-testid=SToggleLabel]");

    expect(sToggleLabel.text()).toStrictEqual("my label")
  });

  it.each([true, false])
  ("Should change the values as parent changes them", async (currentValue) => {
    let parent = mountParent(currentValue);
    const sToggle = parent.find("[data-testid=SToggleInput]");

    await sToggle.setValue(!currentValue)
    await nextTick();

    expect(parent.vm.toggleValue).toEqual(!currentValue)
  })

  it("Should be disabled when I set on component and should add the classes accordingly", () => {
    wrapper = shallowMount(SToggle, {
      props: {
        label: "my label",
        disabled: true
      }
    })

    const sToggle = findSToggle();
    const sToggleInput = sToggle.find("input");

    expect(sToggle.classes()).toContain("disabled");
    expect(sToggleInput.attributes()).toHaveProperty("disabled");
  })

  it("Should invert the label in case it is needed", () => {
    wrapper = shallowMount(SToggle, {
      props: {
        label: "my label",
        invertLabel: true
      }
    });

    const sToggle = findSToggle();
    expect(sToggle.classes()).toContain("invert-label");
  })

  it.each([
    {
      size: undefined /* NO SIZE INFORMED */,
      classItem: "md-button"
    },
    { size: "lg", classItem: "lg-button" },
    { size: "md", classItem: "md-button" }
  ])
  ("Should apply the size ($size) classes ($classItem) accordingly ", ({ classItem, size }) => {
    wrapper = shallowMount(SToggle, {
      props: {
        size
      }
    })

    const sToggleBody = wrapper.find("[data-testid=SToggleBody]");
    expect(sToggleBody.classes()).toContain(classItem);
  })
})