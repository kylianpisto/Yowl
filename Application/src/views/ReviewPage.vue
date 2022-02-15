<template>
  <NavBar />

  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="message" v-for="data in shelves.data.data" :key="data.id">
    <div class="user">
      <h3 class="name_user">{{ data.pseudo }}</h3>
    </div>
    <div class="text">
      <h4>{{ data.post }}</h4>

      <p>{{ data.review }}</p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar.vue'
import axios from 'axios'

export default {
  name: 'ReviewPage',
  components: { NavBar },
  data() {
    return {
      shelves: []
    }
  },

  created() {
    console.log('test :' + this.shelves)
    axios.defaults.baseURL = '//localhost:9001/'
    axios
      .get('/?search=' + this.$route.query.search)
      .then(res => (this.shelves = res))
  }
}
</script>

<style scoped>
.message .user {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  margin: 10px 0;
}

.message {
  display: flex;
  max-width: 1300px;
  width: auto;

  margin-left: 50px;
  background: #ffffff70;
  border-radius: 25px;
  margin-bottom: 10px;
}

.message .user img {
  width: 100px;
  height: 100px;

  border-radius: 50px;
}

.message .text p {
  top: 0;
}

.message .text {
  padding: 20px;
  width: 90%;
}

.barrer {
  width: 97%;
  height: 3px;
  background: grey;
  margin: 30px 25px;
}
</style>
