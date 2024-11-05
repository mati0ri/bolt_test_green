<script setup lang="ts">
const handleSubmit = (event: Event) => {
  event.preventDefault()
  // Add form submission logic here
}
</script>

<template>
  <section id="contact" class="py-20 bg-gray-900 text-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Get In Touch</h2>
      <form @submit="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium mb-2">Name</label>
          <input type="text" id="name" required
                 class="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" required
                 class="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary">
        </div>
        <div>
          <label for="message" class="block text-sm font-medium mb-2">Message</label>
          <textarea id="message" rows="4" required
                    class="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
        </div>
        <button type="submit" 
                class="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-lg transition-colors">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>