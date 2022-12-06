import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLCvfrgKG8XWQZPqkIM4OhW0q6IvCyCvQ",
  authDomain: "cooking-website-8ee16.firebaseapp.com",
  projectId: "cooking-website-8ee16",
  storageBucket: "cooking-website-8ee16.appspot.com",
  messagingSenderId: "863771718617",
  appId: "1:863771718617:web:fb66c5d36f4b4e81781fc8",
};

//initialize firebase

firebase.initializeApp(firebaseConfig);


//initializa services

const projectFirestore = firebase.firestore()

export {projectFirestore};