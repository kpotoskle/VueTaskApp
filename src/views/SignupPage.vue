<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Créer un compte</h2>

      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-700">Nom d'utilisateur</label>
          <input type="text" v-model="username" class="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input type="email" v-model="email" class="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Mot de passe</label>
          <input type="password" v-model="password" class="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">S'inscrire</button>
      </form>

      <p class="mt-4 text-center">
        Déjà inscrit ?
        <router-link to="/login" class="text-blue-500 hover:underline">Connexion</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Logique d'inscription ici
      console.log('Utilisateur:', this.username, this.email);
    }
  }
};
</script>


