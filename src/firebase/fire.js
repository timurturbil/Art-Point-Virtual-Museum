
import firebase from 'firebase/app'
require('firebase/auth');
const firebaseConfig = {
    apiKey: "AIzaSyDpu3RDAE5GO_IlVdaqmdgQ_3sSDmglozo",
    authDomain: "museum-app-32e17.firebaseapp.com",
    projectId: "museum-app-32e17",
    storageBucket: "museum-app-32e17.appspot.com",
    messagingSenderId: "422583999973",
    appId: "1:422583999973:web:3313e6a748e3de061ae30c"
  };
const fire = firebase.initializeApp(firebaseConfig);

export default fire;