import app from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDmMjtC1lvYtQB6LMnq_AsGPqoJycGWYeA",
  authDomain: "reactfirebase-b3cfd.firebaseapp.com",
  projectId: "reactfirebase-b3cfd",
  storageBucket: "reactfirebase-b3cfd.appspot.com",
  messagingSenderId: "371237745855",
  appId: "1:371237745855:web:dddcb2019b20da6dc6420a",
  measurementId: "G-BQLBJCR2X6"
};

console.log(firebaseConfig)

const firebase = app.initializeApp(firebaseConfig)

export default firebase