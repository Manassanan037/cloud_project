<script setup>

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyB8QksPeRJVdaxpk6TTXpjWJBXKu_A1n3M",
  authDomain: "test-01-e7ac6.firebaseapp.com",
  projectId: "test-01-e7ac6",
  storageBucket: "test-01-e7ac6.appspot.com",
  messagingSenderId: "543308994069",
  appId: "1:543308994069:web:08664d66dae8d209cf201c",
  measurementId: "G-MG6JQ2W7ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

getToken(messaging, { vapidKey: 'BAtJxI9TebA8Q5f2pqurTL9oGd3CCiVa-8HYVFY651Dm7oQ9XAT2ExD-feo3axnwbqIiL2K9bpeVYQUVAqmfWs8' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log("Token is ", currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


</script>

<template>
  <router-view>

  </router-view>
</template>
