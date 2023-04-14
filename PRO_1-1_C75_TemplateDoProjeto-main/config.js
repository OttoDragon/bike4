import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyByFLsc0dcd3Cn5Jx01FBe1BGhvAyvtggY",
  authDomain: "bike-a7a01.firebaseapp.com",
  projectId: "bike-a7a01",
  storageBucket: "bike-a7a01.appspot.com",
  messagingSenderId: "602823275311",
  appId: "1:602823275311:web:62728e88c9ae0241bb67da"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
