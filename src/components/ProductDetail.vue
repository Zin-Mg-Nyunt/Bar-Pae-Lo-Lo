<script setup>
import { useRouter } from 'vue-router'
import getProduct from '@/composable/getProduct'

const router = useRouter()
let { id } = defineProps({
  id: String,
})
let { product, error, load } = getProduct(id)
load()
</script>

<template>
  <div
    class="w-full h-full bg-gray-400/50 flex justify-center items-center absolute top-0 left-0 rounded-2xl"
    @click.self="router.go(-1)"
  >
    <div
      v-if="product"
      class="mx-auto max-w-2xl rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl"
    >
      <div class="grid gap-8 md:grid-cols-2">
        <div class="overflow-hidden rounded-2xl bg-slate-100 shadow-inner ring-1 ring-slate-200/80">
          <img :src="product.image" :alt="product.name" class="h-full w-full object-cover" />
        </div>

        <div class="flex flex-col gap-4">
          <div class="space-y-2">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Featured Product
            </p>
            <h1 class="text-3xl font-bold text-slate-900">{{ product.name }}</h1>
            <p class="text-slate-600">
              {{ product.detail }}
            </p>
          </div>

          <div class="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <p class="flex items-center gap-2">
              <span class="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              In stock and ready to ship
            </p>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Price</p>
              <p class="text-2xl font-bold text-slate-900">${{ product.price.toFixed(2) }}</p>
            </div>
            <button
              class="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>
