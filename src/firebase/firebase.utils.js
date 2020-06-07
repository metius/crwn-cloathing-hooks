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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('Error creating the user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;