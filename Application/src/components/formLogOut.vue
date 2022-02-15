<template>
  <div class="center">
    <form @submit.prevent="onSubmit" id="card-logout">
      <img
        src="https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Icon_params.PNG?token=GHSAT0AAAAAABQIKPKXWPT3QNJFQVYIJU4EYP6UCPA"
        alt=""
        v-on:click="changeValueParam"
        id="param"
      />

      <div id="url">
        <img
          v-if="showparam == false"
          alt="Profil image"
          id="imagePP"
          :src="url_PP"
          v-on:click="changeValuePP"
        />
        <img
          v-else
          alt="Profil image"
          id="imagePP"
          :src="url_PP"
        />
      </div>

      <div class="width">
        <input
          v-if="showparam == false"
          v-model="name"
          class="input name"
          placeholder="User"
          required
        />
        <p v-else class="input name">{{ this.name }}</p>
      </div>
      <button
        v-if="showparam == true"
        v-bind:disabled="xhrRequest"
        v-bind:class="{ disabled: xhrRequest }"
        v-on:click="logOut"
        class="input"
        id="btn_submit"
      >
        <p> Log out </p>
      </button>
      <button
        v-else
        v-bind:disabled="xhrRequest"
        v-bind:class="{ disabled: xhrRequest }"
        v-on:click="UpdateUser(name)"
        :style="myStyle"
        class="input"
        id="btn_submit"
      >
        <p >Save</p>
      </button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      name: '',
      // myStyle:{
      //   background: url("") 
      // },
      url_PP: '',
      showparam: true,
      xhrRequest: false
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut()
      this.$router.push("/")
    },
    changeValueParam() {
      this.showparam = this.showparam ? false : true
      console.log(this.showparam)
      const user = firebase.auth().currentUser

      user.updateProfile({
        displayName: 'theo'
      })
      console.log(user)
    },
    changeValuePP() {
        const user = firebase.auth().currentUser;    
        let img_pok = Math.floor(Math.random() * 897) + 1;
            if (img_pok <= 9) img_pok = "00" + img_pok;
            else if (img_pok <= 99) img_pok = "0" + img_pok;
        
          console.log(img_pok)

          let PP = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + img_pok + ".png"
          console.log(PP)

          user.updateProfile({
            photoURL: PP
          }).then(() => {
            this.url_PP = user.photoURL
          }).catch((error) => {
            console.log(error)
              // ...
          });
    },
    UpdateUser(pseudo) {
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
  mounted() {
    const user = firebase.auth().currentUser
    this.name = user.displayName
    
    let image_PP = user.photoURL;
    
    let img_pok = Math.floor(Math.random() * 897) + 1;
    if (img_pok <= 9) img_pok = "00" + img_pok;
    else if (img_pok <= 99) img_pok = "0" + img_pok;

    let PP_New = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + img_pok + ".png"

    console.log(" c'est : " + PP_New)


    if (image_PP == null) {
      user.updateProfile({
            photoURL: PP_New
          }).then(() => {
            console.log("Bravo")
          }).catch((error) => {
            console.log(error)
              // ...
          });;  
    }
    this.url_PP = user.photoURL
    console.log(image_PP)
    console.log(PP_New)


  }
}
</script>

<style scoped>
.center {
  margin: 100px 0;
  display: flex;
  justify-content: center;
}

#card-logout {
  position: relative;
  background: #ffffff27;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  padding: 50px 0;
  border-radius: 50px;
}

#param {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 64px;
  height: 64px;
}

#url {
  border-radius: 500px;
  width: 250px;
  height: 250px;
  margin-bottom: 50px;
}

#imagePP {
  width: auto;
  height: 100%
}

.width {
  position: relative;
  width: 250px;
  height: 50px;
  margin-bottom: 50px;
}

.name {
  position: absolute;
  top: 0;
  bottom: 0;
}

.input {
  padding: 0 15px;
  margin: 25px 0;
  width: 250px;
  height: 50px;
  border-radius: 15px;
  background: #ffffff50;
  font-size: 32px;

  border: none;
}

input:focus {
  outline: none;
}

#btn_submit {
  background: #5d3f84;
  border-radius: 25px;
}

button p {
  color: #ffffff;
  top: 0;
  margin: 0;
  padding: 0;
}
</style>
