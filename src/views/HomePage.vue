<template>
  <div class="flex">
    <SideBar />
    <div class="flex-1 p-6">
      <router-view /> <!-- Affiche le contenu des pages basées sur les routes -->
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'; // Assurez-vous que le chemin est correct

export default {
  name: 'HomePage',
  components: {
    SideBar,
  },
};
</script>

<style scoped>
/* Ajoute des styles supplémentaires si nécessaire */
</style>
