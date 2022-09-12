import { initializeApp } from "firebase/app";

import {
  doc,
  collection,
  getFirestore,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYwcfG5kErnzPDeDOjtIlE-g698jwltVM",
  authDomain: "fitness-app-1e36b.firebaseapp.com",
  projectId: "fitness-app-1e36b",
  storageBucket: "fitness-app-1e36b.appspot.com",
  messagingSenderId: "604488646893",
  appId: "1:604488646893:web:521903a0c8db441b9a4ce4",
  measurementId: "G-MG7P82E8BV",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getQuery = async (dbCollection, field, stringInput) => {
  return query(collection(db, dbCollection), where(field, "==", stringInput));
};

export const updateDb = async (aCollection, docId, field, data) => {
  const docRef = doc(db, aCollection, docId);

  await updateDoc(docRef, {
    [field]: data,
  })
    .then(() => console.log("update successful"))
    .catch((err) => console.log(`unsucessful, error:${err}`));
};
