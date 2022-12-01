import {afterEach, describe as when, expect, it} from "vitest";
import {mount, shallowMount, VueWrapper} from "@vue/test-utils";
import SDataTable from "../SDataTable.vue";
import {nextTick} from "vue";

const items = [
  {"id":1,"first_name":"Nesta","last_name":"Breem","email":"nbreem0@harvard.edu","gender":"Agender","ip_address":"22.193.239.109"},
  {"id":2,"first_name":"Ian","last_name":"Forkan","email":"iforkan1@furl.net","gender":"Male","ip_address":"169.233.8.101"},
  {"id":3,"first_name":"Sadye","last_name":"Tanman","email":"stanman2@webmd.com","gender":"Female","ip_address":"170.161.249.49"},
  {"id":4,"first_name":"Dunstan","last_name":"Shortall","email":"dshortall3@jugem.jp","gender":"Male","ip_address":"212.101.29.177"},
  {"id":5,"first_name":"Minna","last_name":"Pumphreys","email":"mpumphreys4@artisteer.com","gender":"Female","ip_address":"19.11.52.240"},
  {"id":6,"first_name":"Melania","last_name":"Ledwitch","email":"mledwitch5@sitemeter.com","gender":"Non-binary","ip_address":"14.195.142.240"},
  {"id":7,"first_name":"Ketti","last_name":"Giraths","email":"kgiraths6@sakura.ne.jp","gender":"Female","ip_address":"139.156.103.198"},
  {"id":8,"first_name":"Albertine","last_name":"Everley","email":"aeverley7@vk.com","gender":"Female","ip_address":"234.84.161.80"},
  {"id":9,"first_name":"Hayley","last_name":"Gosselin","email":"hgosselin8@angelfire.com","gender":"Female","ip_address":"247.105.68.48"},
  {"id":10,"first_name":"Maurizio","last_name":"Bleasdille","email":"mbleasdille9@addtoany.com","gender":"Male","ip_address":"81.20.212.42"},
];
const cols = [
  { name: "First name", value: "first_name" },
  { name: "Last name", value: "last_name" },
  { name: "Email", value: "email" },
  { name: "Gender", value: "gender" },
  { name: "IP Address", value: "ip_address" }
]
let wrapper: VueWrapper;

afterEach(() => wrapper.unmount())

const findRows = () => wrapper.findAll("[data-testid=bodyRow]");
const findLoading = () => wrapper.find("[data-testid=loading]");

when("I send data to the data table", () => {
  it("Should render the tabular data with as many array entries as it has length", () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols
      }
    });

    const sRows = findRows();
    expect(sRows.length).toEqual(items.length);
  })

  it("Should not render a loading div when no loading is present", () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols
      }
    });

    const sRowLoading = findLoading();
    expect(sRowLoading.exists()).toBe(false);
  })

  it
  .each([
    {
      slots: ["first_name", "last_name","email","gender","ip_address",],
      expectations: ["teste","teste2", "teste3", "teste4", "teste5"]
    },
    {
      slots: ["first_name", "last_name","email","gender","ip_address",],
      expectations: ["teste5","teste4", "teste3", "teste2", "teste1"]
    }
  ])
  ("Should have slots available for each value sent by value", ({ slots, expectations }) => {
    // THIS TEST SHOULD ASSERT IF THE CONTENT IS BEING SHOWN CORRECTLY
    // WHEN THE SLOTS ARE SENT
    wrapper = mount(SDataTable, {
      props: {
        data: items,
        cols
      },
      slots: {
        [slots[0]]: expectations[0],
        [slots[1]]: expectations[1],
        [slots[2]]: expectations[2],
        [slots[3]]: expectations[3],
        [slots[4]]: expectations[4],
      }
    });

    expect(wrapper.text()).toContain(expectations[0])
    expect(wrapper.text()).toContain(expectations[1])
    expect(wrapper.text()).toContain(expectations[2])
    expect(wrapper.text()).toContain(expectations[3])
    expect(wrapper.text()).toContain(expectations[4])
  })

  it("Should render a checkbox with each row when selectable is sent", () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        selectable: true
      }
    });

    const sRowsSelectable = wrapper.findAll("[data-testid=selectableRow]");

    expect(sRowsSelectable.length).toEqual(10);

    for (const item of sRowsSelectable) {
      expect(item.find("input").element.type).toEqual("checkbox");
    }
  });

  it("Should render a loader when isLoading prop is true", () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        loading: true
      }
    });

    const LoadingWrapper = wrapper.find("[data-testid=loading]");

    expect(LoadingWrapper.exists()).toBe(true);
  });

  it("Should render the header with each column mapping to a name in cols", () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols
      }
    });

    const tHead = wrapper.find("[data-testid=thead]");
    const tHeadCell = tHead.findAll("th");

    expect(tHeadCell.length).toBe(cols.length);

    for (const cell of cols) {
      expect(tHead.text()).toContain(cell.name);
    }
  })

  it("Should render a selectable thead with an input checkbox inside when prop selectable is passed", () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        selectable: true
      }
    });

    const tHead = wrapper.find("[data-testid=thead]");
    const selectableThead = tHead.findAll("[data-testid=theadSelectable]");

    expect(selectableThead.length).toEqual(1)
    expect(selectableThead[0].find("input").element.type).toBe("checkbox")
  })
})

when("I need a pagination functionality", () => {
  const findPagination = () => wrapper.find("[data-testid=pagination]");

  it("should have a total quantity of registries written in the pagination section", () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        total: items.length
      }
    });

    const PaginationTotals = findPagination()
      .find("[data-testid=paginationTotals]");

    expect(PaginationTotals.text()).toContain(items.length)
  })

  it.each([
    { perPage: 10, expected: 1 },
    { perPage: 5,  expected: 2 },
    { perPage: 3,  expected: 4 },
    { perPage: 4,  expected: 3 },
    { perPage: 2,  expected: 5 },
    { perPage: 1,  expected: 10}
  ])
  ("Should have the current page within the pagination container depending on how my items perPage I choose to show", ({ perPage, expected }) => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        perPage
      }
    });

    const paginationsPage = findPagination()
      .find("[data-testid=paginationPage]");

    expect(paginationsPage.text()).toContain(expected)
  })

  it.each([
    { perPage: 10, expected: 1 },
    { perPage: 5,  expected: 2 },
    { perPage: 3,  expected: 4 },
    { perPage: 4,  expected: 3 },
    { perPage: 2,  expected: 5 },
    { perPage: 1,  expected: 10}
  ])
  ("Should change pages and accordingly", async ({ perPage, expected }) => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        perPage
      }
    });

    const nextPage = findPagination().find("[data-testid=nextPage]");
    const paginationPage = findPagination().find("[data-testid=paginationPage]");

    // FAZER O LOOP PARA CADA PÁGINA DETERMINADA EM EXPECTED
    for (let i = 1; i <= expected; i++) {
      expect(paginationPage.text()).toContain(i);

      await nextPage.trigger("click");
      await nextTick();
    }
  })

  it("Should change pages and not go over the max pages available", async () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        perPage: 5
      }
    });

    const nextPage = findPagination().find("[data-testid=nextPage]");
    const paginationPage = findPagination().find("[data-testid=paginationPage]");

    await nextPage.trigger("click");
    await nextTick();

    await nextPage.trigger("click");
    await nextTick();

    await nextPage.trigger("click");
    await nextTick();

    expect(paginationPage.text()).toContain(2);
    expect(paginationPage.text()).not.toContain(3);
  })

  it("Should change back the pages", async () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        perPage: 3
      }
    });

    const previousPage = findPagination()
      .find("[data-testid=previousPage]");

    const nextPage = findPagination()
      .find("[data-testid=nextPage]")

    const paginationPage = findPagination()
      .find("[data-testid=paginationPage]")

    await nextPage.trigger("click");
    await nextPage.trigger("click");
    await nextPage.trigger("click");
    // NOW IT SHOULD BE AT PAGE 3 OF 4

    await previousPage.trigger("click");
    await nextTick();

    expect(paginationPage.text()).toContain(3)

    await previousPage.trigger("click")
    expect(paginationPage.text()).toContain(2)


    await previousPage.trigger("click")
    expect(paginationPage.text()).toContain(1)
  })

  it("Should not go back after the minimum of 1", async () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        perPage: 3
      }
    });

    const previousPage = findPagination()
      .find("[data-testid=previousPage]");

    const paginationPage = findPagination()
      .find("[data-testid=paginationPage]")

    await previousPage.trigger("click");
    await previousPage.trigger("click");
    await previousPage.trigger("click");
    // NOW IT SHOULD BE AT PAGE 3 OF 4

    await nextTick();
    expect(paginationPage.text()).toContain(1)
  })

  it("Should show the correct number of items based on pagination premises", async () => {
    wrapper = shallowMount(SDataTable, {
      props: {
        data: items,
        cols,
        perPage: 4
      }
    });

    const nextPage = findPagination()
      .find("[data-testid=nextPage]");

    let bodyRows = findRows();

    // PRIMEIRA PÁGINA
    expect(bodyRows.length).toEqual(4)

    await nextPage.trigger("click")
    await nextTick()

    bodyRows = findRows();
    // SEGUNDA PÁGINA
    expect(bodyRows.length).toEqual(4)

    await nextPage.trigger("click")
    await nextTick()
    //
    bodyRows = findRows();
    // TERCEIRA E ÚLTIMA PÁGINA
    expect(bodyRows.length).toEqual(2)
  })

  it.todo("Should change perPage when clicked")
});

when.todo("I want a selectable row");