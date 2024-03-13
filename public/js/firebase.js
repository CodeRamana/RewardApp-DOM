
  const firebaseConfig = {
    apiKey: "AIzaSyC2ugkdXI5HLvLuh5OPggrlsrdhyCoVXKc",
    authDomain: "rewards-app-21c65.firebaseapp.com",
    projectId: "rewards-app-21c65",
    storageBucket: "rewards-app-21c65.appspot.com",
    messagingSenderId: "935130910370",
    appId: "1:935130910370:web:1772061912811c661651fb",
    measurementId: "G-VEFQEG4FSB"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);

  const addData =(records)=>{
    db.collection("Form Details").add(records)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
  }

//   

