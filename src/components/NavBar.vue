<script setup lang="ts">
const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' }
]
</script>

<template>
  <nav class="fixed top-0 w-full bg-gray-900 text-white p-4 z-50">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <div class="text-xl font-bold">DevPortfolio</div>
      <div class="space-x-6">
        <a v-for="item in menuItems" 
           :key="item.name" 
           :href="item.href"
           class="hover:text-primary-light transition-colors">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>