import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAJBkVEkXH73ldQJf1WxpYtiF_GIkKXPPI",
  authDomain: "project-71-50eb7.firebaseapp.com",
  projectId: "project-71-50eb7",
  storageBucket: "project-71-50eb7.appspot.com",
  messagingSenderId: "910475549651",
  appId: "1:910475549651:web:f11ea591f6be15b84dad26"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
