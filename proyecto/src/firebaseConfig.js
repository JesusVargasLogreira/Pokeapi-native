import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyATbEhJ3z5Jzbkw4c8vX0Eqf-VkLHVVltc",
    authDomain: "pokeapi-246bd.firebaseapp.com",
    projectId: "pokeapi-246bd",
    storageBucket: "pokeapi-246bd.firebasestorage.app",
    messagingSenderId: "120216959988",
    appId: "1:120216959988:web:9ae307d85eee952ea4d7a1"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };