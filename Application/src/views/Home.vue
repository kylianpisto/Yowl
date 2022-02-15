<template>
  <NavBar />

  <GridHome />
</template>

<script>
import GridHome from '@/components/gridHome.vue'
import NavBar from '@/components/navBar.vue'

export default {
  name: 'Home',
  components: { GridHome, NavBar }
}
</script>
