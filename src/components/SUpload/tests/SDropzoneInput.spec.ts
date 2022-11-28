import {describe as when} from "vitest";
import {shallowMount, VueWrapper} from "@vue/test-utils";
import SDropzoneInput from "../SDropzoneUpload.vue";

let wrapper:VueWrapper;
const findDropzone = () => wrapper.find("[data-testid=SDropzone]")

when("I customize the upload icon", () => {
  it("Should not change the default icon when not passed through props", () => {
    wrapper = shallowMount(SDropzoneInput);

    const sIcon = findDropzone().find("[data-testid=icon]")

    expect(sIcon.attributes()).toHaveProperty("icon", "uim:upload-alt")
  })

  it
  .each(["mdi:account", "mdi:tree"])
  ("Should change the icon as passed in props", (icon) => {
    wrapper = shallowMount(SDropzoneInput, {
      props: { icon }
    });

    const sIcon = findDropzone().find("[data-testid=icon]");

    expect(sIcon.attributes()).toHaveProperty("icon", icon)
  })
});

when("I need to set a file type", () => {

})