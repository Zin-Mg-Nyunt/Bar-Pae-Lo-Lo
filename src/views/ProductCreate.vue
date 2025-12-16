<script setup>
import { reactive, ref } from 'vue'
import getProducts from '@/composable/getProducts'
import getCategories from '@/composable/getCategories'
import { watch } from 'vue'

let { products, error, load } = getProducts()
load()

let categories = ref([])
watch(products, (value) => {
  let { uniqueCategories } = getCategories(value)
  categories.value = uniqueCategories.value
})

// const categories = ['Beverage', 'Snack', 'Meal', 'Dessert', 'Other']
const newProduct = reactive({
  name: '',
  detail: '',
  category: '',
  price: '',
  image: null,
})

const imageName = ref('No file chosen')

const handleImage = (event) => {
  const [file] = event.target.files || []
  newProduct.image = file || null
  imageName.value = file ? file.name : 'No file chosen'
}

const handleSubmit = () => {
  // Placeholder submit handler for now
  console.log('Submitting product', { ...newProduct })
}
</script>

<template>
  <div
    class="min-h-screen bg-linear-to-br from-slate-100 to-sky-100 flex items-center justify-center"
  >
    <div class="w-full max-w-3xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-8">
      <div class="mb-6 space-y-1">
        <h1 class="text-2xl font-bold text-slate-900">Create Product</h1>
        <p class="text-slate-600">Add a new menu item to the catalog.</p>
      </div>

      <form class="grid gap-6" @submit.prevent="handleSubmit">
        <label class="flex flex-col gap-2 text-slate-900 font-semibold">
          <span class="text-sm">Name</span>
          <input
            v-model="newProduct.name"
            type="text"
            placeholder="Ex: Iced Latte"
            required
            class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </label>

        <label class="flex flex-col gap-2 text-slate-900 font-semibold">
          <span class="text-sm">Detail</span>
          <textarea
            v-model="newProduct.detail"
            rows="3"
            placeholder="Short description, flavor notes, etc."
            required
            class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-y min-h-[96px]"
          />
        </label>

        <label class="flex flex-col gap-2 text-slate-900 font-semibold">
          <span class="text-sm">Category</span>
          <select
            v-model="newProduct.category"
            required
            class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          >
            <option value="" disabled>Select category</option>

            <option v-for="category in categories" :key="category" :value="category.slug">
              {{ category.name }}
            </option>
          </select>
        </label>

        <label class="flex flex-col gap-2 text-slate-900 font-semibold">
          <span class="text-sm">Price</span>
          <div class="flex items-center gap-2">
            <span
              class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 font-bold text-slate-900"
              >$</span
            >
            <input
              v-model="newProduct.price"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              required
              class="flex-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
        </label>

        <label class="flex flex-col gap-2 text-slate-900 font-semibold">
          <span class="text-sm">Image</span>
          <div class="flex flex-wrap items-center gap-3">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              class="sr-only"
              @change="handleImage"
            />
            <label
              for="image-upload"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-px hover:shadow-xl active:translate-y-px cursor-pointer"
              >Choose file</label
            >
            <span class="text-sm text-slate-600">{{ imageName }}</span>
          </div>
        </label>

        <button
          class="w-full rounded-xl bg-linear-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-500/30 transition hover:-translate-y-px hover:shadow-2xl active:translate-y-px"
          type="submit"
        >
          Save Product
        </button>
      </form>
    </div>
  </div>
</template>
