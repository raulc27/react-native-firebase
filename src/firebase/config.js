import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCAf_wbGTWJ89MAzeTX6E0aYGKpEStCbjU',
  authDomain: 'project-645237981098.firebaseapp.com',
  databaseURL: 'https://project-645237981098.firebaseio.com',
  projectId: 'project-645237981098',
  storageBucket: 'project-645237981098.appspot.com',
  messagingSenderId: '645237981098',
  appId: '1:645237981098:android:fc0189ec829666d823f5d3',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };