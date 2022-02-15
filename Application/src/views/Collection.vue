<template>
  <div>
    <div class="center">
      <h1 id="title">Collection : {{ nameCollection }}</h1>
    </div>
    <div class="card mt-4">
      <table class="table m-0">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ id, name, email } in users" :key="id">
            <!-- <div v-if="id"> -->
            <td>{{ name }}</td>
            <td>{{ email }}</td>

            <!-- </div> -->

            <td>
              <router-link :to="`/edit/${id}`">
                <button class="btn btn-primary btn-sm me-2">
                  Edit
                </button>
              </router-link>
              <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import {reactive, computed, onMounted} from 'vue'
import { useLoadUsers, deleteUser } from '@/firebase'
import { useRoute } from 'vue-router'

export default {
  name: 'CollectionId',
  setup() {
    const route = useRoute()

    const nameCollection = route.params.id

    // const route = useRoute()

    // const Collection = computed(() => route.params.id)

    const users = useLoadUsers()

    // let nameCollection = ""

    // onMounted(async () => {
    //   nameCollection = Collection.value
    //   console.log("tien " + Collection.value)
    // })

    return { users, deleteUser, nameCollection }
  }
}
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}

#title {
  font-size: 48px;
  margin: 20px 0;
}
</style>
