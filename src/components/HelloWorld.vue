<template>
  <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
   <div class="p-4">
      <h1 class="text-xl font-bold">John Doe</h1>
      <p class="mt-2 text-gray-600">Développeur front-end passionné par Vue.js et Tailwind CSS.</p>
     <router-link to="/signup" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
       Suivre
     </router-link>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWord'
}
</script>
