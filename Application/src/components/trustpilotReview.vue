<template>
  <div>
    <!-- input tag -->
    <input
      type="search"
      id="query"
      name="search"
      placeholder="Search reviews..."
      v-model="toSearch"
    />
    <button @click="serverCall()">Search</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TrustPilotReview',
  data() {
    return {
      toSearch: ''
    }
  },
  methods: {
    async serverCall() {
      axios.defaults.baseURL = '//localhost:9001/'
      let res = await axios.get('/?search=' + this.toSearch)
      console.log(res)
    }
  }
}
</script>

<style scoped>
#searchbar {
  margin-left: 15%;
  padding: 15px;
  border-radius: 10px;
}

input[type='text'] {
  width: 30%;
  -webkit-transition: width 0.15s ease-in-out;
  transition: width 0.15s ease-in-out;
}

/* When the input field gets focus,
       change its width to 100% */
input[type='text']:focus {
  width: 70%;
}

#list {
  font-size: 1.5em;
  margin-left: 90px;
}

.animals {
  display: list-item;
}
</style>
