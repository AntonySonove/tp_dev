const firebaseConfig = {
    apiKey: "AIzaSyBfGjxly_26FaxgjKGEkRfTWJmlHDts4r8",
    authDomain: "mon-projet-203d5.firebaseapp.com",
    projectId: "mon-projet-203d5",
    storageBucket: "mon-projet-203d5.firebasestorage.app",
    messagingSenderId: "98486713681",
    appId: "1:98486713681:web:e9074e0ab9a465c22ae770"
  };

/**
 * Initialisation de Firebase avec la configuration fournie.
 * @function initializeFirebase
 */
firebase.initializeApp(firebaseConfig);

/**
 * Référence à la base de données Firebase.
 * @type {Object}
 */
const dbRef = firebase.database().ref();

/**
 * Référence au noeud "tasks" dans la base de données.
 * @type {Object}
 */
const allTasksRef = dbRef.child("tasks");