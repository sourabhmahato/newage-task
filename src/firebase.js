import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCSbukzX1oyvBnuJCVHpScKDV-Oe7xghqA",
  authDomain: "new-age-db.firebaseapp.com",
  databaseURL: "https://new-age-db.firebaseio.com",
  projectId: "new-age-db",
  storageBucket: "new-age-db.appspot.com",
  messagingSenderId: "147380369714",
  appId: "1:147380369714:web:b64d89f251076578a43f2b",
  measurementId: "G-B5QMQQDRT1"
};
firebase.initializeApp(firebaseConfig);
export default firebase;