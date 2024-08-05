import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,Auth } from 'firebase/auth';
import { firebaseConfigType } from './types/TypeData';

const firebaseConfig:firebaseConfigType = {
  apiKey: "AIzaSyChXh6QdbnZKBoKSZiboVKLr2PPkcRckbM",
  authDomain: "cryptodashboard-3c36d.firebaseapp.com",
  projectId: "cryptodashboard-3c36d",
  storageBucket:  "cryptodashboard-3c36d.appspot.com",
  messagingSenderId: "879698478554",
  appId: "1:879698478554:web:cdd9ce512e0ce75c69ace3",
  measurementId: "G-KN9P1VS5X0"
};

const app = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
