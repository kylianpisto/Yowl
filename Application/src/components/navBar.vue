<template>
  <div>
    <div id="margin-bottom"></div>
    <nav>
      <div id="left"></div>
      <div id="logo">
          <img
            src="https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Logo_Yowl_Black.png?token=GHSAT0AAAAAABQIKPKXPOOLYRGQCMBJA4NSYP3246A"
            alt="logo"
            id="logo_Home"
            v-on:click="ReturnHome()"

          />
      </div>
      <div id="searchBar">
        <input
          type="search"
          id="query"
          name="search"
          placeholder="Search reviews..."
          v-model="toSearch"
        />
        <button @click="sendToReview()">
          <img
            id="Loupe"
            src="https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/LOUPE.PNG?token=GHSAT0AAAAAABQIKPKW3JMLOSQU3KGEEJEAYP33MRA"
            alt="Search icon"
          />
        </button>
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Category">Category</router-link></li>

        <li v-if="this.isConnect == false">
          <router-link to="/Login">Profil</router-link>
        </li>
        <li v-if="this.isConnect == true">
          <router-link to="/Logout">Log-out</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import firebase from 'firebase'

// import CategoryCreate from '@/components/CategoryCreate.vue'
// import Collection from '@/components/Collection.vue'
// import UserList from '@/components/UserList.vue'

export default {
  name: 'NavBar',
  methods: {
    ReturnHome() {
      this.$router.push('/')
    },
    forceUpdate() {
      this.$forceUpdate()
    },
    sendToReview() {
      this.$router.push('/ReviewPage?search=' + this.toSearch)
    },
    CreateDisplayName(pseudo) {
      const user = firebase.auth().currentUser;      

      user.updateProfile({
        displayName: pseudo
      }).then(() => {
        // Update successful
        // ...
      }).catch((error) => {
        console.log(error)
          // ...
      });  
    }
  },
  data() {
    return {
      isConnect: ' ',
      toSearch: ''
    }
  },
  mounted() {
    var uid = ' '

    const auth = firebase.auth()
    uid = auth.currentUser


    if (uid == null) this.isConnect = false
    else {
      let pseudo = auth.currentUser.displayName
      let email = auth.currentUser.email.split('@')[0]
      console.log(email)
      this.isConnect = true
      if (pseudo == null) {
        console.log("mince")
        this.CreateDisplayName(email)
      }
      else console.log("existe déja");
    }
    console.log('this connect ' + this.isConnect)

    this.forceUpdate()
  }
}
</script>

<style>
* {
  margin: 0;
}

#logo_Home {
  cursor: pointer;
}

button,
input[type='submit'],
input[type='reset'] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.router-link-exact-active {
  font-weight: bold;
  color: #725c8e;
}

#left {
  height: 100px;
  width: 200px;
}

#logo {
  margin-left: 40px;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100px;
  width: auto;
}

#logo img {
  height: 100%;
  padding: 5px;
}

#searchBar {
  position: relative;
  margin: 10px;
  background-color: red;

  min-width: 300px;
  width: 100%;
  max-width: 850px;

  border-color: green;
  height: 60px;
  border-radius: 50px;
}

#searchBar input {
  padding-left: 40px;
  padding-right: 15px;
  border-radius: 50px;
  width: 100%;
  height: 100%;
  border: none;
}

input[type='text']::-ms-clear {
  width: 0;
  height: 0;
}

#searchBar button {
  position: absolute;
  top: 5px;
  right: 30px;
}

#searchBar button img {
  width: 50px;
  height: 50px;
}

header {
  background-color: #89cff0;
}

nav ul {
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  height: auto;
  margin-bottom: 0;
}

nav ul li {
  display: flex;
  justify-content: center;
  height: 100%;
}

nav a {
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: black;
  margin-right: 50px;
  text-align: center;
}

#margin-bottom {
  margin-bottom: 200px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  top: 0;
  position: fixed;
  z-index: 99;
  width: 100%;
  min-height: 100px;
  max-height: auto;
  background-color: rgba(154, 206, 255);
  border-bottom: 0px transparent solid;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

@media screen and (min-width: 675px) and (max-width: 1000px) {
  #logo {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  nav {
    position: absolute;
    top: 0;
  }

  nav ul {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  #margin-bottom {
    margin-bottom: 200px;
  }
}

@media screen and (max-width: 675px) {
  nav {
    position: absolute;
    top: 0;
  }

  nav ul {
    margin-top: 20px;
    margin-bottom: 20px;

    width: 100%;
  }

  nav ul li {
    margin: 5px;
    width: 100%;
  }

  #logo {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #margin-bottom {
    margin-bottom: 400px;
  }
}
</style>
