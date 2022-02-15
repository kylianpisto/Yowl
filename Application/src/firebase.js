import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyD_apOeMsVszDlbO1-TcxmpkfsoeIRmH20',
  authDomain: 'yowl-auth.firebaseapp.com',
  projectId: 'yowl-auth',
  storageBucket: 'yowl-auth.appspot.com',
  messagingSenderId: '1066699925652',
  appId: '1:1066699925652:web:3dd81507bd3f6a55972c81',
  measurementId: 'G-KSDKB37PJ5'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')
const CategoriesCollection = db.collection('categories')

// -----------------------------

export const createCollect = collection => {
  db.collection('allCollections').add({ name: collection, number_comment: 1 })
  var db_collection = db.collection(collection)
  return db_collection.add({ name: 'Tilleule', title: 'je sais pas' })
}

//Comment in collection

export const createComment = collection => {
  console.log(collection)
  console.log('_______________')
  console.log('deded' + collection)

  return console.log('fin du programme')
  // db.collection('allCollections').add({name : collection,number_comment: 1})
  // var db_collection = db.collection(collection)
  // return db_collection.add({ name: 'Tilleule', title: 'je sais pas' })
}

export const createCategory = category => {
  console.log(category)

  return CategoriesCollection.add({
    name: { title: 'hello', name: 'gg' },
    title: 'je sais pas'
  })
}

//test ________________________________

export const createUser = user => {
  console.log(user)
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  console.log(`      	
 ________________     _____     _____     _______________     ___________________
 |              |     |   |     |   |     |             |     |    _________    |
 |____     _____|     |   |     |   |     |      _______|     |   |         |   |
      |   |           |   |     |   |     |     |             |   |         |   |
      |   |           |   |_____|   |     |     |_______      |   |         |   |
      |   |           |             |     |             |     |   |         |   |
      |   |           |   _______   |     |      _______|     |   |         |   |
      |   |           |   |     |   |     |     |             |   |         |   |
      |   |           |   |     |   |     |     |_______      |   |         |   |
      |   |           |   |     |   |     |             |     |   |_________|   |
      |___|           |___|     |___|     |_____________|     |_________________|
 
      
       
      _______
      |vvvvv|  /|__/|
         I   /O,O   |
         I /_____   |      /|/|
        J|/^ ^ ^ |  |    /00  |    _//|
         |^ ^ ^ ^ |W|   |/^^| |   /oo |
          |m___m__|_|    |m_m_|   |mm_|
     `)
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
