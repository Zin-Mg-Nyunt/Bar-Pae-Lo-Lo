<script setup>
import { computed, ref } from 'vue'
let showDropdown = ref(false)
let { products } = defineProps({
  products: Array,
})
let categories = ref([])

products.forEach((p) => {
  categories.value.push(p.category)
})

// uniqueCategories
let uniqueCategories = computed(() => {
  return categories.value.filter((c, index, array) => {
    return array.indexOf(c) === index
  })
})

let filteredCategory = ref('Filter by category')
let filterBy = (value) => {
  if (value == 'All') {
    filteredCategory.value = 'Filter by category'
  } else {
    filteredCategory.value = value
  }
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      @click="showDropdown = !showDropdown"
    >
      <span>{{ filteredCategory }}</span>
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.084l3.71-3.853a.75.75 0 1 1 1.08 1.04l-4.243 4.405a.75.75 0 0 1-1.08 0L5.25 8.27a.75.75 0 0 1-.02-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div
      class="absolute right-0 mt-2 w-48 h-50 overflow-auto rounded-xl border border-slate-100 bg-white p-2 text-sm shadow-lg z-50"
      :class="showDropdown ? 'inline-block' : 'hidden'"
    >
      <button class="block w-full rounded-lg px-3 py-2 text-left text-slate-700 hover:bg-slate-50">
        <router-link :to="{ name: 'home' }" class="w-full inline-block" @click="filterBy('All')">
          All
        </router-link>
      </button>
      <button
        class="block w-full rounded-lg px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
        v-for="category in uniqueCategories"
        :key="category"
      >
        <router-link
          :to="{
            name: 'query',
            query: {
              category,
            },
          }"
          class="w-full inline-block"
          @click="filterBy(category)"
        >
          {{ category }}
        </router-link>
      </button>
    </div>
  </div>
</template>

<style></style>
