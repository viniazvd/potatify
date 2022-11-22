import { describe as when, it } from "vitest";
import {shallowMount, VueWrapper} from "@vue/test-utils";
import SAvatarV2 from "../SAvatar.vue";
import {S_AVATAR_VARIANTS} from "../interfaces/SAvatar.variants";

let wrapper: VueWrapper;

const getAvatar = () => wrapper.find("[data-testid=SAvatar]");
const getContainer = () => wrapper.find("[data-testid=SAvatarContainer]");

const imageLink = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const imageAlt = "Vinizera Almeida";

when("no props are informed", () => {
  it("should use the fallback content", () => {
    wrapper = shallowMount(SAvatarV2);

    const SAvatar = getAvatar();

    // @TODO TROCAR PELAS INICIAIS
    expect(SAvatar.attributes("src")).toMatch(/https:\/\/.+/);
    expect(SAvatar.attributes("alt")).toBeUndefined();
  })
})

when("used with src and alt", () => {
  it("Should render the component correctly", () => {
    wrapper = shallowMount(SAvatarV2, {
      props: {
        src: imageLink,
        alt: imageAlt
      }
    });

    const SAvatar = getAvatar();

    expect(SAvatar.attributes("src")).toBe(imageLink);
    expect(SAvatar.attributes("alt")).toBe(imageAlt);
  })
})

when("I want a variant image", () => {
  const cases = [
    {
      variant: S_AVATAR_VARIANTS.ROUNDED,
      expectedClasses: "rounded"
    },
    {
      variant: S_AVATAR_VARIANTS.CIRCLE,
      expectedClasses: "circle"
    },
    {
      variant: S_AVATAR_VARIANTS.SQUARE,
      expectedClasses: "square"
    },
  ];

  it.each(cases)
    ("Should render a $variant image when $variant argument is informed", ({ variant, expectedClasses }) => {
    wrapper = shallowMount(SAvatarV2, {
      props: {
        variant: variant
      }
    });

    const SAvatarContainer = getContainer();

    expect(SAvatarContainer.classes()).toContain(expectedClasses)
  })

  it.each(cases)
    ("Should not include other variants when one is declared", ({ variant }) => {
      wrapper = shallowMount(SAvatarV2, {
        props: {
          variant: variant
        }
      });

      const SAvatarContainer = getContainer();

      const notAllowedVariants = Object.values(S_AVATAR_VARIANTS)
        .filter(item => item !== variant);

      const hasNonAllowedClasses = notAllowedVariants.some((notAllowedVariant) => {
        // SAVATAR INCLUI ALGUÉM QUE NÃO DEVERIA ESTAR CONTIDO NAS CLASSES ?
        return SAvatarContainer.classes().includes(notAllowedVariant)
      });

      expect(hasNonAllowedClasses).toBeFalsy();
    })
})

when("I define the size", () => {
  it("Should apply width and height equally to the image", () => {
    const imageSize = 60;
    wrapper = shallowMount(SAvatarV2, {
      props: {
        size: imageSize
      }
    })

    const SAvatarContainer = getContainer();
    expect(SAvatarContainer.attributes("style"))
      .toContain(`width: ${imageSize}px`);

    expect(SAvatarContainer.attributes("style"))
      .toContain(`height: ${imageSize}px`);
  })
})