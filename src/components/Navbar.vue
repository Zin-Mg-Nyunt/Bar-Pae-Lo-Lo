<script setup>
import { useRoute, useRouter } from 'vue-router'

let route = useRoute()
let router = useRouter()

const filterBySearch = (search) => {
  router.push({
    name: 'query',
    query: {
      search,
      category: route.query.category,
    },
  })
}
</script>
<template>
  <div class="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3">
    <div class="flex items-center gap-3">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-sky-400 to-indigo-500 text-lg font-black text-slate-900"
      >
        B
      </div>
      <span class="hidden md:inline-block text-lg font-semibold tracking-wide"
        >Bar • Pae • Lo • Lo</span
      >
    </div>

    <nav class="flex flex-1 items-center justify-center gap-6 text-sm font-semibold">
      <router-link :to="{ name: 'home' }" class="text-slate-200 transition hover:text-sky-300">
        Home
      </router-link>
    </nav>

    <div class="flex flex-1 justify-end">
      <label class="relative w-full max-w-xs">
        <span class="sr-only">Search</span>
        <input
          type="search"
          placeholder="Search..."
          class="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-50 placeholder:text-slate-300/80 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-300/60"
          @input="filterBySearch($event.target.value)"
        />
        <!-- <div class="inline-block sm:hidden">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="pointer-events-none h-4 w-4 text-slate-200/80"
              >
                <path
                  fill="currentColor"
                  d="m19.53 18.47-3.66-3.66a6.5 6.5 0 1 0-1.06 1.06l3.66 3.66a.75.75 0 1 0 1.06-1.06ZM6.75 10.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
                />
              </svg>
            </div> -->
      </label>
    </div>
  </div>
</template>

<style></style>
