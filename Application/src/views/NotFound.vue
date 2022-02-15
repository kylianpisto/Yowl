<template>
  <NavBar />

  <div class="center">
    <h1>404 - Not Found - 😭</h1>
    <img src="" alt="" />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;

  color: white;
}
</style>

<script>
import NavBar from '@/components/navBar.vue'

export default {
  name: 'Home',
  components: { NavBar }
}
</script>
