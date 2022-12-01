<template>
  <div class="m-12">
    <p @click="toggleValue" class="text-white">qualquerzinha</p>
    <SDrawer
      is-open
      :size="300"
      permanent
      class="drawer p-5"
    >
      gg
    </SDrawer>
    <div class="w-[600px]">

      <SCollapsible >
        <template #header>
          <li>meu itme</li>
        </template>

        <div>meu conteudo</div>
      </SCollapsible>
    </div>
    <SCardV2 class="dropdown-style max-w-[500px] prose prose-stone prose:md">
      <p class="mb-4 pl-2">Actions center</p>

      <div class="grid gap-4 grid-rows-3 grid-cols-4">
        <SCardV2 class="row-span-3 col-span-2 dropdown-style lighten h-fit py-2 px-6" no-padding>
          <!-- @TODO avaliar como SList -->
          <div class="flex gap-2 items-center rounded-lg">
            <div class="rounded-full bg-blue-500 p-1 w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="mdi:wifi" color="white"></SIcon>
            </div>
            <p>Wifi</p>
          </div>
          <div class="flex gap-2 items-center rounded-lg">
            <!-- @TODO incluir opção no SButton -->
            <div class="rounded-full bg-blue-500 p-1 w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="mdi:bluetooth" color="white"></SIcon>
            </div>
            <p>Bluetooth</p>
          </div>
          <div class="flex gap-2 items-center rounded-lg">
            <!-- @TODO incluir opção no SButton -->
            <div class="rounded-full bg-blue-500 p-1 w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="mdi:apple" color="white"></SIcon>
            </div>
            <p>Airdrop</p>
          </div>
        </SCardV2>

        <SCardV2 class="row-span-1 col-span-2 dropdown-style lighten" no-padding>
          <div class="flex gap-4 items-center px-4">
            <div class="rounded-full bg-indigo-500 p-1 w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="ri:moon-fill" color="white"></SIcon>
            </div>
            <p>Sleep</p>
          </div>
        </SCardV2>
        <SCardV2 class="row-span-2 h-fit col-span-1 dropdown-style lighten w-full" no-padding>
          <div class="p-4 text-center">
            <div class="rounded-full m-auto w-[40px] h-[40px] flex items-center justify-center rotate-90">
              <SIcon size="30" icon="ic:baseline-battery-20" color="gray"></SIcon>
            </div>
            <p class="m-1">Battery</p>
          </div>
        </SCardV2>
        <SCardV2 class="row-span-2 h-fit col-span-1 dropdown-style lighten w-full" no-padding>
          <div class="p-4 text-center">
            <div class="rounded-full m-auto w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="ion:copy" color="gray"></SIcon>
            </div>
            <!-- REAVALIAR OS ESPAÇAMENTOS ENTRE TAGS P -->
            <p class="m-1">Share</p>
          </div>
        </SCardV2>
      </div>

    </SCardV2>

    <SCardV2 no-padding class="overflow-hidden">
<!--      <SDataTable-->
<!--        :data="items"-->
<!--        :cols="cols"-->
<!--        loading-->
<!--        @update:pagination="checkPagination"-->
<!--        :pagination="{ perPage: 5, page: 1, total: items.length }"-->
<!--        ></SDataTable>-->
    </SCardV2>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import SCardV2 from "./SCard/SCardV2.vue";
import SDataTable from "./SDataTable/SDataTable.vue";
import SCollapsible from "./SCollapsible/Index.vue";
import SIcon from "./SIcon/Index.vue";
import SDrawer from "./SDrawer/Index.vue";

const items = ref([{"id":1,"first_name":"Nesta","last_name":"Breem","email":"nbreem0@harvard.edu","gender":"Agender","ip_address":"22.193.239.109"},
  {"id":2,"first_name":"Ian","last_name":"Forkan","email":"iforkan1@furl.net","gender":"Male","ip_address":"169.233.8.101"},
  {"id":3,"first_name":"Sadye","last_name":"Tanman","email":"stanman2@webmd.com","gender":"Female","ip_address":"170.161.249.49"},
  {"id":4,"first_name":"Dunstan","last_name":"Shortall","email":"dshortall3@jugem.jp","gender":"Male","ip_address":"212.101.29.177"},
  {"id":5,"first_name":"Minna","last_name":"Pumphreys","email":"mpumphreys4@artisteer.com","gender":"Female","ip_address":"19.11.52.240"},
  {"id":6,"first_name":"Melania","last_name":"Ledwitch","email":"mledwitch5@sitemeter.com","gender":"Non-binary","ip_address":"14.195.142.240"},
  {"id":7,"first_name":"Ketti","last_name":"Giraths","email":"kgiraths6@sakura.ne.jp","gender":"Female","ip_address":"139.156.103.198"},
  {"id":8,"first_name":"Albertine","last_name":"Everley","email":"aeverley7@vk.com","gender":"Female","ip_address":"234.84.161.80"},
  {"id":9,"first_name":"Hayley","last_name":"Gosselin","email":"hgosselin8@angelfire.com","gender":"Female","ip_address":"247.105.68.48"},
  {"id":10,"first_name":"Maurizio","last_name":"Bleasdille","email":"mbleasdille9@addtoany.com","gender":"Male","ip_address":"81.20.212.42"},
  {"id":11,"first_name":"Suzanne","last_name":"Banasiak","email":"sbanasiaka@abc.net.au","gender":"Female","ip_address":"78.19.232.165"},
  {"id":12,"first_name":"Ealasaid","last_name":"Paulin","email":"epaulinb@google.com.hk","gender":"Female","ip_address":"72.128.63.181"},
  {"id":13,"first_name":"Richmond","last_name":"Haldenby","email":"rhaldenbyc@unc.edu","gender":"Male","ip_address":"16.52.111.7"},
  {"id":14,"first_name":"Gleda","last_name":"Lafflina","email":"glafflinad@shop-pro.jp","gender":"Female","ip_address":"198.63.138.140"},
  {"id":15,"first_name":"Niko","last_name":"Archell","email":"narchelle@miitbeian.gov.cn","gender":"Male","ip_address":"15.156.209.114"},
  {"id":16,"first_name":"Gibb","last_name":"Poundford","email":"gpoundfordf@netscape.com","gender":"Male","ip_address":"13.77.31.224"},
  {"id":17,"first_name":"Bevvy","last_name":"Hannaford","email":"bhannafordg@hubpages.com","gender":"Female","ip_address":"39.38.160.226"},
  {"id":18,"first_name":"Joleen","last_name":"Bickerdicke","email":"jbickerdickeh@4shared.com","gender":"Female","ip_address":"161.188.15.133"},
  {"id":19,"first_name":"Konstanze","last_name":"Baskerville","email":"kbaskervillei@imgur.com","gender":"Female","ip_address":"155.29.70.90"},
  {"id":20,"first_name":"Lenora","last_name":"Muckeen","email":"lmuckeenj@sourceforge.net","gender":"Female","ip_address":"119.138.44.214"},
  {"id":21,"first_name":"Natividad","last_name":"Rabat","email":"nrabatk@answers.com","gender":"Female","ip_address":"96.72.71.7"},
  {"id":22,"first_name":"Osborn","last_name":"Danher","email":"odanherl@washington.edu","gender":"Male","ip_address":"105.6.6.105"},
  {"id":23,"first_name":"Odey","last_name":"Quilkin","email":"oquilkinm@go.com","gender":"Male","ip_address":"226.80.0.114"},
  {"id":24,"first_name":"Trudi","last_name":"Gledstane","email":"tgledstanen@xing.com","gender":"Female","ip_address":"43.236.58.84"},
  {"id":25,"first_name":"Tiphani","last_name":"Burrows","email":"tburrowso@google.it","gender":"Female","ip_address":"237.98.63.250"},
  {"id":26,"first_name":"Emelita","last_name":"Lorain","email":"elorainp@cnet.com","gender":"Bigender","ip_address":"234.250.5.183"},
  {"id":27,"first_name":"Lilian","last_name":"Rhoades","email":"lrhoadesq@biblegateway.com","gender":"Female","ip_address":"104.195.53.236"},
  {"id":28,"first_name":"Robinet","last_name":"Suscens","email":"rsuscensr@time.com","gender":"Genderfluid","ip_address":"71.84.225.212"},
  {"id":29,"first_name":"Quinta","last_name":"Beeble","email":"qbeebles@foxnews.com","gender":"Female","ip_address":"242.76.195.125"},
  {"id":30,"first_name":"Ellary","last_name":"Rising","email":"erisingt@rakuten.co.jp","gender":"Male","ip_address":"117.131.113.23"},
  {"id":31,"first_name":"Willetta","last_name":"Hethron","email":"whethronu@istockphoto.com","gender":"Female","ip_address":"176.147.226.89"},
  {"id":32,"first_name":"Giustina","last_name":"Escreet","email":"gescreetv@mapy.cz","gender":"Female","ip_address":"90.22.31.33"},
  {"id":33,"first_name":"Kally","last_name":"Thorndale","email":"kthorndalew@ucsd.edu","gender":"Female","ip_address":"246.150.59.252"},
  {"id":34,"first_name":"Mureil","last_name":"McKinty","email":"mmckintyx@toplist.cz","gender":"Female","ip_address":"67.108.74.191"},
  {"id":35,"first_name":"Darline","last_name":"Vautrey","email":"dvautreyy@techcrunch.com","gender":"Bigender","ip_address":"207.209.212.83"},
  {"id":36,"first_name":"Pryce","last_name":"Gerrad","email":"pgerradz@redcross.org","gender":"Male","ip_address":"186.112.157.41"},
  {"id":37,"first_name":"Had","last_name":"Posselow","email":"hposselow10@cafepress.com","gender":"Bigender","ip_address":"144.189.208.60"},
  {"id":38,"first_name":"Gaspard","last_name":"Ferenczi","email":"gferenczi11@imageshack.us","gender":"Male","ip_address":"16.98.129.153"},
  {"id":39,"first_name":"Homere","last_name":"Brimblecomb","email":"hbrimblecomb12@imdb.com","gender":"Male","ip_address":"105.123.121.99"},
  {"id":40,"first_name":"Benji","last_name":"Meachem","email":"bmeachem13@comsenz.com","gender":"Male","ip_address":"79.80.72.159"},
  {"id":41,"first_name":"Devlen","last_name":"Jakubowski","email":"djakubowski14@springer.com","gender":"Male","ip_address":"125.137.18.105"},
  {"id":42,"first_name":"Benedikta","last_name":"Kinglesyd","email":"bkinglesyd15@salon.com","gender":"Female","ip_address":"161.251.180.138"},
  {"id":43,"first_name":"Oriana","last_name":"Faulconbridge","email":"ofaulconbridge16@samsung.com","gender":"Female","ip_address":"67.152.95.201"},
  {"id":44,"first_name":"Adriena","last_name":"Cammocke","email":"acammocke17@1und1.de","gender":"Female","ip_address":"217.179.98.18"},
  {"id":45,"first_name":"Porter","last_name":"Blazy","email":"pblazy18@chicagotribune.com","gender":"Male","ip_address":"151.101.183.20"},
  {"id":46,"first_name":"Huey","last_name":"Dunnion","email":"hdunnion19@shop-pro.jp","gender":"Male","ip_address":"52.86.112.12"},
  {"id":47,"first_name":"Todd","last_name":"Nadin","email":"tnadin1a@mit.edu","gender":"Male","ip_address":"168.12.10.113"},
  {"id":48,"first_name":"Dorey","last_name":"Copes","email":"dcopes1b@symantec.com","gender":"Male","ip_address":"177.200.181.246"},
  {"id":49,"first_name":"Inger","last_name":"Pearn","email":"ipearn1c@seesaa.net","gender":"Female","ip_address":"179.94.54.198"},
  {"id":50,"first_name":"Reg","last_name":"Baxstare","email":"rbaxstare1d@whitehouse.gov","gender":"Agender","ip_address":"241.71.218.92"}])
const cols = [
  { name: "Nome", value: "first_name" },
  { name: "Sobrenome", value: "last_name" },
  { name: "Gênero", value: "gender" },
  { name: "Email", value: "email" }
]

const isOpen = ref(true);

function toggleValue () {
  isOpen.value = !isOpen.value
}

</script>
<style scoped>

/* ISSO PODE SER UM UTIL PRA BLUR BACKDROP */
.dropdown-style {
  @apply rounded-2xl shadow-xl backdrop-blur-2xl bg-blend-overlay;
  background-color: #ffffff7d;
}

.dropdown-style.lighten {
  @apply bg-blend-lighten backdrop-blur-2xl;
  background-color: #ffffff5d;
}

</style>