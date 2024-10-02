<template>
  <div class="bg-gray-800 text-white w-52 h-screen p-5">
    <h1 class="text-xl font-bold mb-4">Dashboard</h1>
    <ul>
      <li class="mb-2">
        <router-link to="/tasks" class="block py-2 px-3 rounded hover:bg-gray-700">Mes Tâches</router-link>
      </li>
      <li class="mb-2">
        <router-link to="/add-task" class="block py-2 px-3 rounded hover:bg-gray-700">Ajouter une Tâche</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>
