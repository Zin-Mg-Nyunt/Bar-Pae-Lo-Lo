<script setup>
let { product } = defineProps({
  product: Object,
})
</script>

<template>
  <article
    class="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer"
  >
    <div class="aspect-4/3 overflow-hidden rounded-xl bg-slate-100">
      <img :src="product.image" alt="" class="w-full h-full" />
    </div>
    <router-link :to="{ name: 'detail', params: { id: product.id } }">
      <div class="mt-4 flex items-start justify-between">
        <div>
          <h3 class="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition">
            {{ product.name }}
          </h3>
          <p class="text-sm text-slate-600">{{ product.detail }}</p>
        </div>
        <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
          >${{ product.price }}</span
        >
      </div>
    </router-link>
    <button
      class="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 transition"
    >
      Add to cart
    </button>
  </article>
</template>

<style></style>
