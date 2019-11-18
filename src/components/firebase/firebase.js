import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

export default class Firebase {
  constructor() {
    try {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
      }
    }
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };
  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Users API ***
  user = (uid, callback) =>
    this.db
      .ref(`users/${uid}`)
      .once("value")
      .then(s => callback(s.val()));
  users = () => this.db.ref("users");

  getCurrentUser = callback => {
    if (this.auth.currentUser === null) {
      callback(null);
      return;
    }
    const userId = this.auth.currentUser.uid;
    this.db
      .ref(`users/${userId}`)
      .once("value")
      .then(s => callback(s.val()));
  };
}
