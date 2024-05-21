// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object


firebase.initializeApp({
    apiKey: "AIzaSyB8QksPeRJVdaxpk6TTXpjWJBXKu_A1n3M",
    authDomain: "test-01-e7ac6.firebaseapp.com",
    projectId: "test-01-e7ac6",
    storageBucket: "test-01-e7ac6.appspot.com",
    messagingSenderId: "543308994069",
    appId: "1:543308994069:web:08664d66dae8d209cf201c",
    measurementId: "G-MG6JQ2W7ZM"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: 'pngwing.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });