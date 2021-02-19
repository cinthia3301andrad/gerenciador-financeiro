import firebase from "firebase/app";
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyCO8KnjwNnQ2-Zq382Yp5up5GB2MEHFV0c",
  authDomain: "gerenciador-financeiro-26955.firebaseapp.com",
  projectId: "gerenciador-financeiro-26955",
  storageBucket: "gerenciador-financeiro-26955.appspot.com",
  messagingSenderId: "1004018878729",
  appId: "1:1004018878729:web:772eedc197bb8f7a9bebd8"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()