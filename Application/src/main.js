import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'

let app

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app')
  }
})
