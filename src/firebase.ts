import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA1EJjijBHb6mbuvVtaJ8QJ9id8tIb_KPo',
  authDomain: 'discode-replica.firebaseapp.com',
  projectId: 'discode-replica',
  storageBucket: 'discode-replica.appspot.com',
  messagingSenderId: '884448945180',
  appId: '1:884448945180:web:e697a8aed9c2d2ceaaabd9',
  measurementId: 'G-R3RL25TSVJ',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider, db };
