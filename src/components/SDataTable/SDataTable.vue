<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <!-- TABLE WRAPPER-->
      <div class="min-w-full">
        <div class="overflow-x-auto">
          <table>
            <thead class="border-[1px]" data-testid="thead">
              <tr>
                <th data-testid="theadSelectable" v-if="props.selectable">
                  <input type="checkbox" v-model="checkAllIsToggled" />
                </th>
                <th
                  :style="{ minWidth: col.width }"
                  scope="col"
                  :class="setAlignTo(col.align)"
                  class="min-w-content whitespace-pre"
                  v-for="col in props.cols"
                  :key="col.name">
                  {{ col.name }}
                </th>
              </tr>
            </thead>
            <tbody v-auto-animate>
              <tr data-testid="loading" v-if="props.loading">
                <th colspan="100%" class="text-center py-6">
                  <SLoader size="24" class="mx-auto"></SLoader>
                </th>
              </tr>
              <tr v-if="!internalData.length && !props.loading">
                <th colspan="100%" class="prose prose-sm font-normal text-center py-6">
                  Não há dados para exibir
                </th>
              </tr>
              <!-- GERA CADA LINHA   -->
              <tr data-testid="bodyRow" v-for="(row, rowIndex) in internalData" :key="rowIndex">
                <!-- GERA CADA COLUNA   -->
                <td data-testid="selectableRow" v-if="props.selectable">
                  <input :checked="isIncludedInModel(row)" type="checkbox" @change="setModelValue(row)" />
                </td>
                <td v-for="(col, index) in props.cols" :key="index" :class="setAlignTo(col.align)">
                  <slot :name="col.value" v-bind="{ data: row }">
                    {{ row[col.value] }}
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div data-testid="pagination" class="flex justify-between bg-white items-center pt-2" v-if="pagination">
<!--      <div v-if="false">-->
<!--        <button @click="paginate(changePerPage, 25)"-->
<!--                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"-->
<!--        >-->
<!--          per page-->
<!--        </button>-->
<!--      </div>-->
      <button
        data-testid="previousPage"
        @click="paginate(previousPage)"
        class="pagination-button !pr-4"
        :class="pagination.page === 1 && 'disabled-pagination'"
        :disabled="pagination.page === 1 || props.loading"
      >
        <SIcon icon="material-symbols:arrow-right-alt-rounded" class="rotate-180"></SIcon>
        Anterior
      </button>

      <div class="prose prose-sm text-center">
        <span data-testid="paginationPage">
          Mostrando a página {{pagination.page}} de {{ totalPages }}
        </span>
        <span data-testid="paginationTotals">
          de {{props.data?.length}} resultados
        </span>
      </div>

      <button
        data-testid="nextPage"
        @click="paginate(nextPage)"
        class="pagination-button !pl-4"
        :class="totalPages === pagination.page && 'disabled-pagination'"
        :disabled="totalPages === pagination.page || props.loading"
      >Próximo
        <SIcon icon="material-symbols:arrow-right-alt-rounded"></SIcon>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SLoader from "@components/SLoader/Index.vue"
import {computed, defineAsyncComponent, PropType, ref} from "vue";

const SIcon = defineAsyncComponent(() => import("../SIcon/Index.vue"));

type TABLE_COLS = {
  name: string
  value: string
  width?: string
  align?: keyof typeof alignOptions
}

const alignOptions = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

type DATA_TABLE_PAGINATION = {
  perPage: number
  page: number
  total: number
}

const emit = defineEmits([
  "update:modelValue",
  "update:pagination"
]);

const props = defineProps({
  loading: Boolean,
  modelValue: { type: null },
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  cols: {
    type: Array as PropType<TABLE_COLS[]>,
    required: true
  },
  selectable: Boolean,
  page: {
    type: Number,
    default: 1
  },
  perPage: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  serverSide: Boolean
})

const pagination = ref<DATA_TABLE_PAGINATION>({
  perPage: props.perPage,
  page: props.page,
  total: props.total
})

// DATA MANAGEMENT
const totalPages = ref(0);

const internalData = computed(() => {
  const page = pagination.value?.page;
  const perPage = pagination.value?.perPage;
  const itemsLength = props.data.length;

  totalPages.value = Math.ceil(itemsLength / perPage);

  if (props.serverSide) {
    return props.data
  }

  return props.data?.reduce((initial, current, index) => {
    // INDEX IS BASED ON ZEROES,
    // SO WE HAVE TO DECREASE BY ONE TO FIND
    // THE INITIAL INDEX
    let maxIndex = (perPage * page) - 1;
    const minIndex = (page - 1) * perPage;

    maxIndex = maxIndex >= itemsLength ? itemsLength : maxIndex;

    if (index <= maxIndex && index >= minIndex) {
      initial.push(current)
    }

    return initial
  }, [])
})
// END DATA MANAGEMENT

// PAGINATION MANAGEMENT
async function paginate(callback: Function, ...args: any[]) {
  clearInternalModel();
  callback(...args)

  emit("update:modelValue", []);
}

function previousPage () {
  const currentPage = pagination.value.page;

  if (currentPage == 1) return;

  pagination.value.page = currentPage - 1

  emit("update:pagination", {
    ...pagination.value
  })
}

const maxPages = computed(() => {
  if (props.serverSide) {
    return pagination.value.total
  }

  return Math.ceil(Number(props.data?.length) / Number(pagination.value?.perPage))
});

function nextPage () {
  const currentPage = pagination.value.page;

  if (currentPage >= maxPages.value) return;

  pagination.value.page = currentPage + 1

  emit("update:pagination", {
    ...pagination.value
  })
}

function changePerPage (value: number) {
  emit("update:pagination", {
    ...pagination.value,
    perPage: value
  })
}
// END PAGINATION MANAGEMENT

function setAlignTo (position: "left" | "right" | "center" = "left") {
  return alignOptions[position]
}

// CHECKBOX MANAGEMENT
const internalModel = ref<Set<any>>(new Set())
function processModel (value: any) {
  const _internalModel = internalModel.value;
  const action = _internalModel.has(value) ? "delete" : "add";

  _internalModel[action](value)
}

const checkAllIsToggled = computed({
  get: () => internalModel.value.size === internalData.value.length,
  set: (val) => {
    if (!val) {
      clearInternalModel()
      emit("update:modelValue", Array.from(internalModel.value))
      return val;
    }

    internalData.value.map((item: any) => {
      internalModel.value.add(item)
    });

    emit("update:modelValue", Array.from(internalModel.value))
    return val
  }
})

function clearInternalModel () {
  internalModel.value.clear()
}

function isIncludedInModel(value: any) {
  return internalModel.value.has(value)
}

function setModelValue(value: any) {
  processModel(value)
  emit("update:modelValue", Array.from(internalModel.value))
}
// END CHECKBOX MANAGEMENT

const colors = {}
const borders = {}

</script>

<script lang="ts">
export default {
  name: "SDataTan;e"
}
</script>
<style lang="postcss" scoped>

table {
  @apply min-w-full
}

thead {
  @apply bg-white border-b
}

thead th {
  @apply prose prose-gray prose-sm font-bold uppercase px-6 py-4 bg-gray-100
}

tbody {
  @apply bg-white transition duration-300 ease-in-out
}

tr:nth-child(even) {
  @apply bg-stone-50
}

tbody tr {
  @apply hover:bg-gray-100 border prose prose-lg
}

tbody td {
  @apply text-sm text-gray-900 font-medium px-6 py-5 whitespace-nowrap
}


/* pagination */

.pagination-button {
  @apply hover:bg-gray-100 ring-gray-200 border ring-offset-2 active:ring-4 rounded flex items-center gap-1 p-2
}

.disabled-pagination {
  @apply bg-gray-100 text-gray-200 hover:cursor-not-allowed active:ring-0
}

</style>