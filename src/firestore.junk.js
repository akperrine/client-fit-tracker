// import "./App.css";

///firebase utils
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  onSnapshot,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBYwcfG5kErnzPDeDOjtIlE-g698jwltVM",
  authDomain: "fitness-app-1e36b.firebaseapp.com",
  projectId: "fitness-app-1e36b",
  storageBucket: "fitness-app-1e36b.appspot.com",
  messagingSenderId: "604488646893",
  appId: "1:604488646893:web:521903a0c8db441b9a4ce4",
  measurementId: "G-MG7P82E8BV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get Docs

const Component = () => {
  const [userInfo, setUserInfo] = React.useState({});
  console.log(userInfo);
  const colRef = collection(db, "users");

  //query

  // React.useEffect(() => {
  //   const getData = async () => {
  //     await getDocs(colRef)
  //       .then((snapshot) => {
  //         let users = [];
  //         snapshot.docs.forEach((doc) => {
  //           users.push({ ...doc.data(), id: doc.id });
  //         });

  //         setUserInfo(users);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   getData();
  // }, []);

  React.useEffect(() => {
    const getUserData = async () => {
      const q = query(collection(db, "users"), where("password", "==", 321321));

      onSnapshot(q, (snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        console.log(users);

        if (users.length === 0) {
          alert("inalid password");
        }

        setUserInfo(users[0]);
      });
    };
    getUserData();
  }, []);

  const handleAddSub = (e) => {
    e.preventDefault();

    console.log(e.target.user.value);
    addDoc(colRef, {
      user: e.target.user.value,
      password: e.target.password.value,
      workout: e.target.workout.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(e.target.id.value);

    const workoutArr = [
      { day: 1, workout: ["5x5 BP", "4x4 pullup"], complete: false },
      { day: 2, workout: [], complete: false },
      { day: 3, workout: [], complete: false },
      { day: 4, workout: [], complete: false },
      { day: 5, workout: [], complete: false },
      { day: 6, workout: [], complete: false },
      { day: 7, workout: [], complete: false },
    ];

    const docRef = doc(db, "users", e.target.id.value);

    await updateDoc(docRef, {
      workout: workoutArr,
    })
      .then(() => alert("update successful"))
      .catch((err) => alert(`unsucessful, error:${err}`));
  };

  return (
    <div className="App">
      <form className="add" onSubmit={handleAddSub}>
        <label for="title">user:</label>
        <input type="text" name="user" required />
        <label>Password:</label>
        <input type="text" name="password" required />
        <label>Workout:</label>
        <input type="text" name="workout" />
        <button>Add a new user</button>
      </form>

      <form className="delete">
        <label for="id">Doc Id:</label>
        <input type="text" name="id" required />
        <button>delete a book</button>
      </form>
      <form className="update" onSubmit={handleUpdate}>
        <label for="id">Doc Id:</label>
        <input type="text" name="id" required />
        <button>Update Document</button>
      </form>
    </div>
  );
};
