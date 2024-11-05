<script setup lang="ts">
const title = "John Doe"
const subtitle = "Full Stack Developer"
const description = "I build modern web applications with a focus on clean code and great user experience."
const profileImage = "/profile-placeholder.jpg"
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary flex-shrink-0">
        <img 
          :src="profileImage" 
          alt="Profile picture"
          class="w-full h-full object-cover"
          onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%234B5563\' stroke-width=\'1\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\'/%3E%3Ccircle cx=\'12\' cy=\'7\' r=\'4\'/%3E%3C/svg%3E'"
        />
      </div>
      <div class="text-center md:text-left">
        <h1 class="text-5xl font-bold mb-4">{{ title }}</h1>
        <h2 class="text-3xl text-primary-light mb-6">{{ subtitle }}</h2>
        <p class="text-xl text-gray-300 max-w-2xl">{{ description }}</p>
        <div class="mt-8">
          <a href="#projects" class="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg transition-colors inline-block">
            View My Work
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rounded-full {
  aspect-ratio: 1;
}</style>