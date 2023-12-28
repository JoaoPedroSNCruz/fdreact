import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

let firebaseConfig = {
    'apiKey': process.env.REACT_APP_FIREBASE_API_KEY,
    'authDomain': process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    'projectId': process.env.REACT_APP_FIREBASE_PROJECT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function saveRegister (feedback) {
  addDoc(collection(db, "feedback"), feedback);
}

export { saveRegister };