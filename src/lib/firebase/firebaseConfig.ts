import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5n1Sfc9iyBTDOnR_pejs_Q_d4D4wVBvs",
  authDomain: "sample-firebase-ai-app-2eb94.firebaseapp.com",
  projectId: "sample-firebase-ai-app-2eb94",
  storageBucket: "sample-firebase-ai-app-2eb94.appspot.com",
  messagingSenderId: "170012387016",
  appId: "1:170012387016:web:59ec4e26c214180890e7fd"
};

// Initialize Firebase only if it hasn't been initialized already
let app: FirebaseApp;

// Check if Firebase has been initialized
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
export { app };