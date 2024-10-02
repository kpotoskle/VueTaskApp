<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Ajouter une nouvelle Tâche</h2>
    <form @submit.prevent="submitTask">
      <div class="mb-4">
        <label for="title" class="block text-gray-700">Titre</label>
        <input type="text" v-model="task.title" id="title" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Titre de la tâche" />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700">Description</label>
        <textarea v-model="task.description" id="description" class="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Description de la tâche"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTaskPage',
  data() {
    return {
      task: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    submitTask() {
      // Logique pour ajouter la tâche (API, localStorage, etc.)
      console.log('Tâche ajoutée : ', this.task);
      this.$router.push('/tasks'); // Rediriger vers la page des tâches après ajout
    },
  },
};
</script>
