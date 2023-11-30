import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDhJCgvcNmxYmlWX_sKavQUj4AwWmPIIM',
  authDomain: 'facility-minder-ba828.firebaseapp.com',
  projectId: 'facility-minder-ba828',
  storageBucket: 'facility-minder-ba828.appspot.com',
  messagingSenderId: '990667545042',
  appId: '1:990667545042:web:2142fc8fd4a1db3667100b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
