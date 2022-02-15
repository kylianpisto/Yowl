<template>
  <NavBar />

  <div id="test">
    <UserCreate />
    <Collection />
    <CategoryCreate />
    <UserList />
  </div>
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import NavBar from '@/components/navBar.vue'
import CategoryCreate from '@/components/CategoryCreate.vue'
import Collection from '@/components/Collection.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Test',
  components: { NavBar, UserCreate, Collection, UserList, CategoryCreate }
}
</script>

<style scoped>
#test {
  margin: 0 400px;
}
</style>
