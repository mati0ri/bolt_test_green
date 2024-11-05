<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Vue and Node.js',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    image: '/project1.jpg'
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management application with team collaboration features',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: '/project2.jpg'
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather forecast application with interactive maps',
    tech: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    image: '/project3.jpg'
  }
]
</script>

<template>
  <section id="projects" class="py-20 bg-gray-100">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" 
             :key="project.title"
             class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="h-48 bg-gray-200"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.tech" 
                    :key="tech"
                    class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>