import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBWt3O_jvxlQ5giaWivHi-plZ3oYaIoXeI",
  authDomain: "crwn-db-2ea22.firebaseapp.com",
  databaseURL: "https://crwn-db-2ea22.firebaseio.com",
  projectId: "crwn-db-2ea22",
  storageBucket: "crwn-db-2ea22.appspot.com",
  messagingSenderId: "333358025495",
  appId: "1:333358025495:web:095d21e822dcd6f86dc552"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;