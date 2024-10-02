<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Liste des Tâches</h2>
    <ul v-if="tasks.length > 0">
      <li v-for="task in tasks" :key="task.id" class="border-b border-gray-300 py-2">
        <h3 class="text-xl font-semibold">{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <router-link :to="`/edit-task/${task.id}`" class="text-blue-500 hover:underline">Modifier</router-link>
      </li>
    </ul>
    <p v-else class="text-gray-500">Aucune tâche pour le moment.</p>
  </div>
</template>

<script>
export default {
  name: 'TaskPage',
  data() {
    return {
      tasks: [
        { id: 1, title: 'Tâche 1', description: 'Description de la tâche 1' },
        { id: 2, title: 'Tâche 2', description: 'Description de la tâche 2' },
      ],
    };
  },
};
</script>
