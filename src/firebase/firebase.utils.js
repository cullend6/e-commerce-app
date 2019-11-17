import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjvDafJIMAkyrdZgGYOKoBLsmvwzEmGwk",
    authDomain: "crwn-clothing-db-21a48.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-21a48.firebaseio.com",
    projectId: "crwn-clothing-db-21a48",
    storageBucket: "crwn-clothing-db-21a48.appspot.com",
    messagingSenderId: "329472319100",
    appId: "1:329472319100:web:fbddb7c0a403682cc2f3f9",
    measurementId: "G-2G4JP4SB2T"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

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
        } catch (error) {
            console.log('Error creating user', error)
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