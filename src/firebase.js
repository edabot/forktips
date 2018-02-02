import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDacqfXgRAOxU5Vq6CZjMqNoamFcxG5VTQ",
  authDomain: "forktips-a212f.firebaseapp.com",
  databaseURL: "https://forktips-a212f.firebaseio.com",
  projectId: "forktips-a212f",
  storageBucket: "forktips-a212f.appspot.com",
  messagingSenderId: "1022024495228"
}

export const login = (callback) => {
  auth.signInWithPopup(provider).then(res => {
    callback(res.user);
  });
};

export const logout = (callback) => {
  auth.signOut().then(() => {
    callback(null)
  });
};

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default firebase
