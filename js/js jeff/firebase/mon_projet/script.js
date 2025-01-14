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


/**
 * Référence au bouton d'ajout de tâche dans l'interface utilisateur.
 * @type {HTMLElement}
 */
const addBtnUI = document.querySelector('#addTaskButton');

/**
 * Référence à la liste des tâches dans l'interface utilisateur.
 * @type {HTMLElement}
 */
const tasksListUI = document.querySelector('#taskList');

/**
 * Ajoute un écouteur d'événements au bouton d'ajout de tâche.
 * @event click
 * @param {Function} addTask - Fonction appelée lors du clic sur le bouton.
 */
addBtnUI.addEventListener('click', addTask);


/**
 * Ajoute une nouvelle tâche à la base de données.
 * @function addTask
 * @description Cette fonction récupère la valeur de l'input de tâche, 
 * crée un nouvel objet tâche avec cette valeur, 
 * l'ajoute à la base de données Firebase, 
 * vide l'input et met à jour l'affichage des tâches.
 */


allTasksRef.push(newTask);