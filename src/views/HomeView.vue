<script setup>
import { ref } from 'vue'
import SingleProduct from '@/components/SingleProduct.vue'
import getProducts from '@/composable/getProducts'
import ProductDetail from '@/components/ProductDetail.vue'

let { id } = defineProps({
  id: {
    type: Number,
    default: null,
  },
})

let showDropdown = ref(false)
let { products, error, load } = getProducts()
load()
</script>

<template>
  <div class="space-y-12">
    <!-- Hero -->
    <section
      class="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 via-sky-500 to-cyan-400 px-6 py-14 text-white shadow-xl"
    >
      <div class="absolute inset-0 bg-grid-white/15 bg-size-[24px_24px] opacity-60"></div>
      <div class="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center">
        <div class="flex-1 space-y-4">
          <p
            class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"
          >
            <span class="inline-block h-2 w-2 rounded-full bg-emerald-300"></span>
            Fresh deals just landed
          </p>
          <h1 class="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Discover curated products crafted for your everyday comfort.
          </h1>
          <p class="max-w-xl text-white/90">
            Shop the latest arrivals, explore trending picks, and find pieces that match your style
            — all in one place.
          </p>
          <div class="flex flex-wrap gap-3">
            <button
              class="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow hover:-translate-y-0.5 hover:shadow-lg transition"
            >
              Shop Now
            </button>
            <button
              class="rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              View Collections
            </button>
          </div>
        </div>
        <div class="flex-1">
          <div class="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div class="grid grid-cols-2 gap-4">
              <div class="rounded-2xl bg-white/90 p-4 text-slate-900 shadow-lg">
                <p class="text-xs font-semibold text-slate-500">Featured</p>
                <h3 class="mt-2 text-lg font-bold">Minimal Chair</h3>
                <p class="mt-1 text-sm text-slate-600">$129.00</p>
              </div>
              <div class="rounded-2xl bg-white/80 p-4 text-slate-900 shadow-lg">
                <p class="text-xs font-semibold text-slate-500">Trending</p>
                <h3 class="mt-2 text-lg font-bold">Desk Lamp</h3>
                <p class="mt-1 text-sm text-slate-600">$59.00</p>
              </div>
              <div class="col-span-2 rounded-2xl bg-white/85 p-4 text-slate-900 shadow-lg">
                <p class="text-xs font-semibold text-slate-500">Bundle</p>
                <h3 class="mt-2 text-lg font-bold">Workspace Essentials</h3>
                <p class="mt-1 text-sm text-slate-600">Chairs, lamps, organizers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter + Product grid -->
    <section class="space-y-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Popular Products</h2>
          <p class="text-sm text-slate-600">Browse curated picks and best-sellers.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <div class="relative">
            <button
              class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              @click="showDropdown = !showDropdown"
            >
              <span>Filter by category</span>
              <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.084l3.71-3.853a.75.75 0 1 1 1.08 1.04l-4.243 4.405a.75.75 0 0 1-1.08 0L5.25 8.27a.75.75 0 0 1-.02-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="absolute right-0 mt-2 w-48 rounded-xl border border-slate-100 bg-white p-2 text-sm shadow-lg z-50"
              :class="showDropdown ? 'inline-block' : 'hidden'"
            >
              <button
                class="block w-full rounded-lg px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
              >
                Furniture
              </button>
              <button
                class="block w-full rounded-lg px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
              >
                Lighting
              </button>
              <button
                class="block w-full rounded-lg px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
              >
                Decor
              </button>
              <button
                class="block w-full rounded-lg px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
              >
                Accessories
              </button>
            </div>
          </div>
          <div class="flex items-center gap-2 text-sm text-slate-600">
            <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            <span>120 items found</span>
          </div>
        </div>
      </div>

      <!-- product grid -->
      <div class="relative">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" v-if="products.length">
          <SingleProduct v-for="product in products" :key="product" :product="product" />
        </div>
        <div v-else>
          <p>No Products Found</p>
        </div>
        <ProductDetail v-if="id" :id="id" />
      </div>
    </section>
  </div>
</template>
