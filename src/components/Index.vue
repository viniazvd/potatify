<template>
  <div class="m-12">
    <!-- {{selected}}
  <SCard no-padding>
    <SDataTable
      class="min-w-full"
      :data="data"
      :cols="cols"
      v-model="selected"
      selectable
      server-side
      v-model:pagination="paginationOpts"
      :loading="isLoading"
    >
      <template #actions="{ data }">
        <SIcon icon="mdi:account"/>
      </template>
    </SDataTable>
  </SCard> -->

  <s-collapsible :is-opened="isOpened" @toggle="isOpened = !isOpened">
    opa
    <br>
    opa
    <br>
    opa
  </s-collapsible>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import SDataTable from "@components/SDataTable/SDataTable.vue";
import SCollapsible from "@components/SCollapsible/Index.vue";
import SCard from "@components/SCard/SCardV2.vue";
import SIcon from "@components/SIcon/Index.vue";

const isOpened = ref(false)

const isLoading = ref(false)
const selected = ref([])
onMounted(() => {
  isLoading.value = true
  setTimeout(async () => {
    isLoading.value = false;
    // data.value = [{"id":1,"first_name":"Myrilla","last_name":"Ind","createdAt":"8/17/2022"},
    //   {"id":2,"first_name":"Juliann","last_name":"Harman","createdAt":"1/21/2022"},
    //   {"id":3,"first_name":"Thomasina","last_name":"Berrick","createdAt":"1/18/2022"},
    //   {"id":4,"first_name":"Wallas","last_name":"Rodenborch","createdAt":"11/15/2021"},
    //   {"id":5,"first_name":"Adelaida","last_name":"Shaudfurth","createdAt":"8/31/2022"},
    //   {"id":6,"first_name":"Dallas","last_name":"Casley","createdAt":"5/25/2022"},
    //   {"id":7,"first_name":"Birk","last_name":"Grahl","createdAt":"8/1/2022"},
    //   {"id":8,"first_name":"Olympie","last_name":"Byart","createdAt":"12/27/2021"},
    //   {"id":9,"first_name":"Shoshana","last_name":"Linning","createdAt":"6/24/2022"},
    //   {"id":10,"first_name":"Jared","last_name":"Connal","createdAt":"4/6/2022"},
    //   {"id":11,"first_name":"Lanae","last_name":"Mattingley","createdAt":"6/12/2022"},
    //   {"id":12,"first_name":"Gisella","last_name":"Norwich","createdAt":"12/2/2021"},
    //   {"id":13,"first_name":"Marrissa","last_name":"Thelwll","createdAt":"4/17/2022"},
    //   {"id":14,"first_name":"Johannes","last_name":"Ritzman","createdAt":"12/1/2021"},
    //   {"id":15,"first_name":"Berke","last_name":"McMurthy","createdAt":"8/7/2022"},
    //   {"id":16,"first_name":"Karola","last_name":"Kobpa","createdAt":"9/7/2022"},
    //   {"id":17,"first_name":"Blisse","last_name":"Dudley","createdAt":"9/9/2022"},
    //   {"id":18,"first_name":"Enrica","last_name":"Greenly","createdAt":"9/22/2022"},
    //   {"id":19,"first_name":"Ariel","last_name":"MacMaster","createdAt":"10/25/2022"},
    //   {"id":20,"first_name":"Alaric","last_name":"Conant","createdAt":"7/8/2022"},
    //   {"id":21,"first_name":"Dotti","last_name":"MacEvilly","createdAt":"5/17/2022"},
    //   {"id":22,"first_name":"Mireille","last_name":"Cianelli","createdAt":"3/12/2022"},
    //   {"id":23,"first_name":"Demetri","last_name":"Sheraton","createdAt":"7/9/2022"},
    //   {"id":24,"first_name":"Aeriell","last_name":"Rubega","createdAt":"4/18/2022"},
    //   {"id":25,"first_name":"Karol","last_name":"Wilsee","createdAt":"3/27/2022"},
    //   {"id":26,"first_name":"Vladamir","last_name":"Hankins","createdAt":"10/25/2022"},
    //   {"id":27,"first_name":"Francisca","last_name":"Pidon","createdAt":"3/13/2022"},
    //   {"id":28,"first_name":"Nadean","last_name":"Burk","createdAt":"2/11/2022"},
    //   {"id":29,"first_name":"Gerladina","last_name":"Hosburn","createdAt":"9/25/2022"},
    //   {"id":30,"first_name":"Aleta","last_name":"Soitoux","createdAt":"1/19/2022"},
    //   {"id":31,"first_name":"Sterne","last_name":"Manjot","createdAt":"12/4/2021"},
    //   {"id":32,"first_name":"Andriana","last_name":"Bertlin","createdAt":"2/8/2022"},
    //   {"id":33,"first_name":"Durward","last_name":"Belison","createdAt":"4/11/2022"},
    //   {"id":34,"first_name":"Laurie","last_name":"Yegorovnin","createdAt":"8/17/2022"},
    //   {"id":35,"first_name":"Estevan","last_name":"Oakinfold","createdAt":"8/23/2022"},
    //   {"id":36,"first_name":"Mallorie","last_name":"Kernoghan","createdAt":"12/11/2021"},
    //   {"id":37,"first_name":"Marcelo","last_name":"Tooher","createdAt":"5/21/2022"},
    //   {"id":38,"first_name":"Keri","last_name":"Cavey","createdAt":"10/8/2022"},
    //   {"id":39,"first_name":"Tabbitha","last_name":"Droghan","createdAt":"1/23/2022"},
    //   {"id":40,"first_name":"Neils","last_name":"Deinhard","createdAt":"6/13/2022"},
    //   {"id":41,"first_name":"Constance","last_name":"Brabant","createdAt":"2/25/2022"},
    //   {"id":42,"first_name":"Gillian","last_name":"MacShirrie","createdAt":"7/25/2022"},
    //   {"id":43,"first_name":"Lurleen","last_name":"Denes","createdAt":"10/1/2022"},
    //   {"id":44,"first_name":"Heather","last_name":"Scroggins","createdAt":"2/16/2022"},
    //   {"id":45,"first_name":"Sherri","last_name":"Manton","createdAt":"10/26/2022"},
    //   {"id":46,"first_name":"Jeddy","last_name":"Crisp","createdAt":"11/2/2022"},
    //   {"id":47,"first_name":"Noam","last_name":"Keddey","createdAt":"11/8/2022"},
    //   {"id":48,"first_name":"Audra","last_name":"Ovenden","createdAt":"1/8/2022"},
    //   {"id":49,"first_name":"Tansy","last_name":"Meredith","createdAt":"6/15/2022"},
    //   {"id":50,"first_name":"Melisande","last_name":"Vick","createdAt":"10/2/2022"},
    //   {"id":51,"first_name":"Sigismond","last_name":"Ettridge","createdAt":"8/13/2022"},
    //   {"id":52,"first_name":"Chickie","last_name":"Warret","createdAt":"8/27/2022"},
    //   {"id":53,"first_name":"Chicky","last_name":"Midgley","createdAt":"1/8/2022"},
    //   {"id":54,"first_name":"Lilah","last_name":"Bruff","createdAt":"3/24/2022"},
    //   {"id":55,"first_name":"Kirstin","last_name":"Beldum","createdAt":"9/16/2022"},
    //   {"id":56,"first_name":"Dasya","last_name":"Python","createdAt":"9/26/2022"},
    //   {"id":57,"first_name":"Athena","last_name":"Ridett","createdAt":"8/19/2022"},
    //   {"id":58,"first_name":"Saunder","last_name":"Radmore","createdAt":"12/23/2021"},
    //   {"id":59,"first_name":"Timotheus","last_name":"Syrett","createdAt":"12/11/2021"},
    //   {"id":60,"first_name":"Annissa","last_name":"Etchells","createdAt":"9/9/2022"},
    //   {"id":61,"first_name":"Filippo","last_name":"Kilshall","createdAt":"10/6/2022"},
    //   {"id":62,"first_name":"Karrah","last_name":"Montague","createdAt":"1/4/2022"},
    //   {"id":63,"first_name":"Caril","last_name":"Pactat","createdAt":"11/23/2021"},
    //   {"id":64,"first_name":"Nadeen","last_name":"Dabell","createdAt":"7/15/2022"},
    //   {"id":65,"first_name":"Rodney","last_name":"Jurzyk","createdAt":"2/5/2022"},
    //   {"id":66,"first_name":"Hillary","last_name":"Josuweit","createdAt":"9/5/2022"},
    //   {"id":67,"first_name":"Lucina","last_name":"Easterling","createdAt":"11/22/2021"},
    //   {"id":68,"first_name":"Samara","last_name":"Pritchard","createdAt":"11/30/2021"},
    //   {"id":69,"first_name":"Jessie","last_name":"Johananoff","createdAt":"10/2/2022"},
    //   {"id":70,"first_name":"Rocky","last_name":"Lochead","createdAt":"11/7/2022"},
    //   {"id":71,"first_name":"Ferrel","last_name":"Filer","createdAt":"10/10/2022"},
    //   {"id":72,"first_name":"Kin","last_name":"Lankford","createdAt":"9/7/2022"},
    //   {"id":73,"first_name":"Marie-jeanne","last_name":"Goodlip","createdAt":"8/28/2022"},
    //   {"id":74,"first_name":"Daloris","last_name":"Cleef","createdAt":"8/19/2022"},
    //   {"id":75,"first_name":"Sidonia","last_name":"Adelsberg","createdAt":"5/7/2022"},
    //   {"id":76,"first_name":"Catlaina","last_name":"Marzello","createdAt":"7/1/2022"},
    //   {"id":77,"first_name":"Jacky","last_name":"O'Reagan","createdAt":"12/19/2021"},
    //   {"id":78,"first_name":"Lin","last_name":"Egdal","createdAt":"12/11/2021"},
    //   {"id":79,"first_name":"Merlina","last_name":"Delle","createdAt":"6/12/2022"},
    //   {"id":80,"first_name":"Costanza","last_name":"Lyven","createdAt":"10/25/2022"},
    //   {"id":81,"first_name":"Oralia","last_name":"Willerton","createdAt":"2/9/2022"},
    //   {"id":82,"first_name":"Royce","last_name":"Robelow","createdAt":"7/5/2022"},
    //   {"id":83,"first_name":"Winfield","last_name":"Dalley","createdAt":"10/6/2022"},
    //   {"id":84,"first_name":"Anthia","last_name":"Gianolini","createdAt":"10/14/2022"},
    //   {"id":85,"first_name":"Meara","last_name":"Purselowe","createdAt":"10/18/2022"},
    //   {"id":86,"first_name":"Nicole","last_name":"Angric","createdAt":"9/19/2022"},
    //   {"id":87,"first_name":"Raven","last_name":"Poles","createdAt":"6/7/2022"},
    //   {"id":88,"first_name":"Ema","last_name":"Felton","createdAt":"6/6/2022"},
    //   {"id":89,"first_name":"Benjamin","last_name":"Fosserd","createdAt":"11/21/2021"},
    //   {"id":90,"first_name":"Burg","last_name":"Sybbe","createdAt":"10/2/2022"},
    //   {"id":91,"first_name":"Jeni","last_name":"Benit","createdAt":"11/7/2022"},
    //   {"id":92,"first_name":"Red","last_name":"Collett","createdAt":"9/16/2022"},
    //   {"id":93,"first_name":"Kasey","last_name":"Caccavella","createdAt":"9/3/2022"},
    //   {"id":94,"first_name":"Ari","last_name":"Caton","createdAt":"7/5/2022"},
    //   {"id":95,"first_name":"Warren","last_name":"Allsep","createdAt":"10/17/2022"},
    //   {"id":96,"first_name":"Bellina","last_name":"Glennie","createdAt":"8/20/2022"},
    //   {"id":97,"first_name":"Nelia","last_name":"Van Velden","createdAt":"11/24/2021"},
    //   {"id":98,"first_name":"Lucita","last_name":"Malecky","createdAt":"3/12/2022"},
    //   {"id":99,"first_name":"Ofilia","last_name":"Brunskill","createdAt":"10/23/2022"},
    //   {"id":100,"first_name":"Bertie","last_name":"Doles","createdAt":"4/21/2022"}]
    await serverSideCallback(paginationOpts)
  }, 0)
})

function serverSideCallback(pagination:any) {
  if (pagination.page === 1) {
    data.value = [{"id":1,"first_name":"Myrilla","last_name":"Ind","createdAt":"8/17/2022"},
        {"id":2,"first_name":"Juliann","last_name":"Harman","createdAt":"1/21/2022"},
        {"id":3,"first_name":"Thomasina","last_name":"Berrick","createdAt":"1/18/2022"},
        {"id":4,"first_name":"Wallas","last_name":"Rodenborch","createdAt":"11/15/2021"},
        {"id":5,"first_name":"Adelaida","last_name":"Shaudfurth","createdAt":"8/31/2022"},
        {"id":6,"first_name":"Dallas","last_name":"Casley","createdAt":"5/25/2022"},
        {"id":7,"first_name":"Birk","last_name":"Grahl","createdAt":"8/1/2022"},
        {"id":8,"first_name":"Olympie","last_name":"Byart","createdAt":"12/27/2021"},
        {"id":9,"first_name":"Shoshana","last_name":"Linning","createdAt":"6/24/2022"},
        {"id":10,"first_name":"Jared","last_name":"Connal","createdAt":"4/6/2022"}]
  }

  if (pagination.page === 2) {
    data.value = [{"id":10,"first_name":"Jared","last_name":"Connal","createdAt":"4/6/2022"},
      {"id":11,"first_name":"Lanae","last_name":"Mattingley","createdAt":"6/12/2022"},
      {"id":12,"first_name":"Gisella","last_name":"Norwich","createdAt":"12/2/2021"},
      {"id":13,"first_name":"Marrissa","last_name":"Thelwll","createdAt":"4/17/2022"},
      {"id":14,"first_name":"Johannes","last_name":"Ritzman","createdAt":"12/1/2021"},
      {"id":15,"first_name":"Berke","last_name":"McMurthy","createdAt":"8/7/2022"},
      {"id":16,"first_name":"Karola","last_name":"Kobpa","createdAt":"9/7/2022"},
      {"id":17,"first_name":"Blisse","last_name":"Dudley","createdAt":"9/9/2022"},
      {"id":18,"first_name":"Enrica","last_name":"Greenly","createdAt":"9/22/2022"},
      {"id":19,"first_name":"Ariel","last_name":"MacMaster","createdAt":"10/25/2022"},]
  }

  if (pagination.page === 3) {
    data.value = [{"id":20,"first_name":"Alaric","last_name":"Conant","createdAt":"7/8/2022"},
      {"id":21,"first_name":"Dotti","last_name":"MacEvilly","createdAt":"5/17/2022"},
      {"id":22,"first_name":"Mireille","last_name":"Cianelli","createdAt":"3/12/2022"},
      {"id":23,"first_name":"Demetri","last_name":"Sheraton","createdAt":"7/9/2022"},
      {"id":24,"first_name":"Aeriell","last_name":"Rubega","createdAt":"4/18/2022"},
      {"id":25,"first_name":"Karol","last_name":"Wilsee","createdAt":"3/27/2022"},
      {"id":26,"first_name":"Vladamir","last_name":"Hankins","createdAt":"10/25/2022"},
      {"id":27,"first_name":"Francisca","last_name":"Pidon","createdAt":"3/13/2022"},
      {"id":28,"first_name":"Nadean","last_name":"Burk","createdAt":"2/11/2022"},
      {"id":29,"first_name":"Gerladina","last_name":"Hosburn","createdAt":"9/25/2022"}]
  }
}

const data = ref();
const cols = ref([
  { name: 'Nome', value: 'first_name', width: "150px" },
  { name: 'teste 3', value: "teste3", align: "right" as const },
  { name: 'Criado em', value: 'createdAt' },
  { name: 'Ações', value: "actions", width: "150px", align: "right" as const },
  { name: 'treste', value: "teste1", width: "150px", align: "right" as const },
  { name: 'teste 2 ', value: "teste2", align: "right" as const },
  { name: 'Sobrenome', value: 'last_name', align: "left" as const },
  { name: 'teste 4', value: "teste4", width: "150px", align: "right" as const },
  { name: 'teste 5', value: "teste5", width: "450px", align: "right" as const },
])

const paginationOpts = ref({
  perPage: 10,
  page: 2,
  total: 100
})

watch(() => paginationOpts, async (changed: any) => {
  await serverSideCallback(changed.value)
}, { deep: true, immediate: true })

</script>