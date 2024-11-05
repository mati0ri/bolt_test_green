<script setup lang="ts">
const resumeData = {
  experience: [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      description: 'Led development of enterprise web applications using Vue.js and Node.js. Managed team of 5 developers.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple client projects. Implemented responsive designs and RESTful APIs.'
    }
  ],
  education: [
    {
      degree: 'Master of Computer Science',
      school: 'Tech University',
      year: '2018'
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'State University',
      year: '2016'
    }
  ]
}
</script>

<template>
  <section id="resume" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">Resume</h2>
        <a 
          href="/resume.pdf" 
          download
          class="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-bold mb-6 text-gray-900">Experience</h3>
          <div class="space-y-8">
            <div v-for="(job, index) in resumeData.experience" 
                 :key="index"
                 class="border-l-4 border-primary pl-4">
              <h4 class="text-xl font-semibold text-gray-900">{{ job.title }}</h4>
              <p class="text-primary font-medium">{{ job.company }}</p>
              <p class="text-gray-600 text-sm mb-2">{{ job.period }}</p>
              <p class="text-gray-700">{{ job.description }}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-6 text-gray-900">Education</h3>
          <div class="space-y-8">
            <div v-for="(edu, index) in resumeData.education" 
                 :key="index"
                 class="border-l-4 border-primary pl-4">
              <h4 class="text-xl font-semibold text-gray-900">{{ edu.degree }}</h4>
              <p class="text-primary font-medium">{{ edu.school }}</p>
              <p class="text-gray-600">{{ edu.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>