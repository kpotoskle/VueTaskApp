<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Modifier la Tâche</h2>
    <form @submit.prevent="updateTask">
      <div class="mb-4">
        <label for="title" class="block text-gray-700">Titre</label>
        <input type="text" v-model="task.title" id="title" class="w-full p-2 border border-gray-300 rounded mt-1" />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700">Description</label>
        <textarea v-model="task.description" id="description" class="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Mettre à jour</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditTaskPage',
  props: ['id'],
  data() {
    return {
      task: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    updateTask() {
      // Logique pour mettre à jour la tâche (API, localStorage, etc.)
      console.log('Tâche mise à jour : ', this.task);
      this.$router.push('/tasks'); // Rediriger vers la page des tâches après mise à jour
    },
  },
  mounted() {
    // Récupérer la tâche en fonction de l'ID passée en paramètre
    // this.task = récupérerTacheParId(this.id); // Implémenter la logique
    console.log('ID de la tâche à modifier : ', this.id);
  },
};
</script>
