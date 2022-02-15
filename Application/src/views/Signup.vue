<template>
    <div id="logo">
      <img
        src="https://raw.githubusercontent.com/EpitechDigitalPromo2026/D-YOW-100-TLS_group-2/main/Application/asset/Logo_Yowl_Black.png?token=GHSAT0AAAAAABQIKPKXPOOLYRGQCMBJA4NSYP3246A"
        alt="logo"
        v-on:click="ReturnHome()"
      />
    </div>
  <ul class="background">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

  <div id="center">
    <div class="row col-6">
      <div class="col-12 text-center mb-4">
        <h1>Sign Up</h1>
      </div>
      <div class="col-sm-5 m-auto">
        <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <div
          v-if="successMessage !== ''"
          class="alert alert-success"
          role="alert"
        >
          {{ successMessage }}
        </div>
        <form @submit.prevent="signupRequest" id="signup-form">
          <div class="row text-left">
            <div class="col-sm-12 form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="form-control form-control-lg"
              />
            </div>
            <div class="col-sm-12 form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="form-control form-control-lg"
              />
            </div>
            <!-- <div id="text-click">-->
            <div id="balisep" class="col-sm-12 text-center">
              <p>
                Already have an account?
                <router-link to="/login">Login</router-link>
              </p>
            </div>
            <!--</div>-->
            <div class="col-sm-12 text-center form-group">
              <button
                v-bind:disabled="xhrRequest"
                v-bind:class="{ disabled: xhrRequest }"
                class="btn btn-lg btn-primary px-4"
              >
                <span v-if="!xhrRequest">Sign Up</span>
                <span v-if="xhrRequest">Please Wait...</span>
              </button>
              <div
                v-if="xhrRequest"
                class="spinner-border text-secondary _loader"
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      xhrRequest: false,
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    ReturnHome() {
      this.$router.push('/')
    },
    signupRequest() {
      let v = this
      v.xhrRequest = true
      v.errorMessage = ''
      v.successMessage = ''

      firebase
        .auth()
        .createUserWithEmailAndPassword(v.email, v.password)
        .then(
          () => {
            v.successMessage = 'Register Successfully.'
            v.xhrRequest = false
          },
          error => {
            let errorResponse = JSON.parse(error.message)
            v.errorMessage = errorResponse.error.message
            v.xhrRequest = false
          }
        )

      const auth = firebase.auth()
      console.log(auth.currentUser.email.split('@')[0])
      let Name = auth.currentUser.email.split('@')[0]
      console.log(Name)

      const user = auth.currentUser
      user.updateProfile({
        displayName: Name
      })
      console.log(auth.currentUser)
    }
  }
}
</script>
<style scoped>
._loader {
  position: relative;
  top: 6px;
  left: 10px;
}

#center {
  margin-top: 200px;
  display: flex;
  justify-content: center;
}

.loader {
  position: relative;
  top: 6px;
  left: 10px;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #4e54c8;
  overflow: hidden;
}
.background li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 19s linear infinite;
}

.background li:nth-child(0) {
  left: 12%;
  width: 126px;
  height: 126px;
  bottom: -126px;
  animation-delay: 1s;
}
.background li:nth-child(1) {
  left: 75%;
  width: 139px;
  height: 139px;
  bottom: -139px;
  animation-delay: 3s;
}
.background li:nth-child(2) {
  left: 46%;
  width: 176px;
  height: 176px;
  bottom: -176px;
  animation-delay: 2s;
}
.background li:nth-child(3) {
  left: 84%;
  width: 153px;
  height: 153px;
  bottom: -153px;
  animation-delay: 4s;
}
.background li:nth-child(4) {
  left: 71%;
  width: 143px;
  height: 143px;
  bottom: -143px;
  animation-delay: 3s;
}
.background li:nth-child(5) {
  left: 75%;
  width: 118px;
  height: 118px;
  bottom: -118px;
  animation-delay: 8s;
}
.background li:nth-child(6) {
  left: 4%;
  width: 173px;
  height: 173px;
  bottom: -173px;
  animation-delay: 17s;
}
.background li:nth-child(7) {
  left: 88%;
  width: 113px;
  height: 113px;
  bottom: -113px;
  animation-delay: 29s;
}
.background li:nth-child(8) {
  left: 44%;
  width: 137px;
  height: 137px;
  bottom: -137px;
  animation-delay: 4s;
}
.background li:nth-child(9) {
  left: 2%;
  width: 155px;
  height: 155px;
  bottom: -155px;
  animation-delay: 41s;
}

/*Essaie*/

.container py-4 {
  background-color: #e790a3;
}

.h1 {
  color: aliceblue;
}

.row {
  position: relative;
  background: #bebbdd;
  border-radius: 25px;
  padding: 30px 0;
}

h1 {
  color: azure;
}

#email {
  border-radius: 15px;
}

#password {
  border-radius: 15px;
}

#login-button-clk {
  color: #5d3f84;
}

#button-login {
  color: #5d3f84;
}

#logo {
  z-index: 10;
  position: absolute;
  top: 10px;
  left: 10px;
}

#logo img {
  width: auto;
  height: 90px;
}

#balisep {
  padding-top: 8px;
  font-size: 10px;
}

.btn {
  border-radius: 40px;
  background-color: #794faf;
  width: 150px;
  padding-right: 10%;
}
</style>
