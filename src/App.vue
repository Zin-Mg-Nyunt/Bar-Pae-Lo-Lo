<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header class="bg-slate-900 text-slate-50 shadow">
      <Navbar />
    </header>

    <main class="mx-auto max-w-7xl px-4 py-6">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="mt-8 border border-slate-100 bg-white py-6 shadow-sm">
      <div
        class="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between mx-auto max-w-7xl"
      >
        <div class="flex items-center gap-2 text-slate-900 font-semibold">
          <span
            class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-sky-400 to-indigo-500 text-sm font-black text-slate-900"
          >
            B
          </span>
          Bar • Pae • Lo • Lo
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <a href="#" class="hover:text-slate-900 transition">Privacy</a>
          <a href="#" class="hover:text-slate-900 transition">Terms</a>
          <a href="#" class="hover:text-slate-900 transition">Support</a>
        </div>
        <p>© 2025 Bar • Pae • Lo • Lo. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
