<script setup lang="ts">
const skills = {
  frontend: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  tools: ['Git', 'Docker', 'AWS', 'Jest', 'Webpack']
}
</script>

<template>
  <section id="skills" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 bg-gray-50 rounded-lg">
          <h3 class="text-xl font-bold mb-4 text-blue-600">Frontend</h3>
          <ul class="space-y-2">
            <li v-for="skill in skills.frontend" 
                :key="skill"
                class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="p-6 bg-gray-50 rounded-lg">
          <h3 class="text-xl font-bold mb-4 text-green-600">Backend</h3>
          <ul class="space-y-2">
            <li v-for="skill in skills.backend" 
                :key="skill"
                class="flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="p-6 bg-gray-50 rounded-lg">
          <h3 class="text-xl font-bold mb-4 text-purple-600">Tools & DevOps</h3>
          <ul class="space-y-2">
            <li v-for="skill in skills.tools" 
                :key="skill"
                class="flex items-center">
              <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>