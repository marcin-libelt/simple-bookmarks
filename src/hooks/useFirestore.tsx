import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

function useFirestore() {
  firebase.initializeApp({
    apiKey: import.meta.env.VITE_FBASE_KEY,
    authDomain: import.meta.env.VITE_FBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FBASE_MESSEGING_SENDER_ID,
    appId: import.meta.env.VITE_FBASE_APP_ID,
  });

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  return {
    auth,
    firebase,
    firestore,
    useAuthState,
    useCollectionData,
  };
}

export default useFirestore;
