import { describe as when, it, expect } from "vitest";
import {VueWrapper, shallowMount} from "@vue/test-utils";
import {TimelineItem} from "../interfaces/Timeline.interface";

import SHorizontalTimeline from "../HorizontalTimeline.vue";

let wrapper: VueWrapper;
const getListItems = () => wrapper.findAll("[data-testid=SHorizontalTimelineListItem]");

when("I create a horizontal timeline", () => {
  it("Should have the length of items defined in timeline items", () => {
    const timelineItems = [
      { description: "description", title: "title", subtitle: "subtitle", icon: "mdi:close" },
      { description: "description", title: "title", subtitle: "subtitle", icon: "mdi:close" },
      { description: "description", title: "title", subtitle: "subtitle", icon: "mdi:close" },
    ] as TimelineItem[];

    wrapper = shallowMount(SHorizontalTimeline, {
      props: {
        timelineItems
      }
    });

    const sHorizontalTimeline = getListItems();

    expect(sHorizontalTimeline.length).toEqual(3);
  })

  it("Should render the items with only the title", () => {
    const timelineItems = [
      { title: "title" },
    ];

    wrapper = shallowMount(SHorizontalTimeline, {
      props: {
        timelineItems
      }
    });

    const [sHorizontalTimeline] = getListItems();
    const Title = sHorizontalTimeline.find("[data-testid=SHorizontalTimelineTitle]")
    const SubTitle = sHorizontalTimeline.find("[data-testid=SHorizontalTimelineSubTitle]")
    const Description = sHorizontalTimeline.find("[data-testid=SHorizontalTimelineDescription]")
    const Icon = sHorizontalTimeline.find("[data-testid=TimelineIcon]")
    
    expect(Title).toBeDefined();
    expect(SubTitle.exists()).toBeFalsy();
    expect(Description.exists()).toBeFalsy();
    expect(Icon.exists()).toBeFalsy();
  })

  it("Should render the props with de values accordingly", () => {
    const timelineItems = [
      { description: "description", title: "title", subtitle: "subtitle", icon: "mdi:close" }
    ];

    wrapper = shallowMount(SHorizontalTimeline, {
      props: {
        timelineItems
      }
    });

    const [sHorizontalTimeline] = getListItems();
    const Title = sHorizontalTimeline.find("[data-testid=SHorizontalTimelineTitle]")
    const SubTitle = sHorizontalTimeline.find("[data-testid=SHorizontalTimelineSubTitle]")
    const Description = sHorizontalTimeline.find("[data-testid=SHorizontalTimelineDescription]")
    
    expect(Title.text()).toBe("title");
    expect(SubTitle.text()).toBe("subtitle");
    expect(Description.text()).toBe("description");
  })
})