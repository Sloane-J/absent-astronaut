import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp9sHme1ATcAkWDhK0IAp528SsaMKdp4M", // Updated API Key
  authDomain: "milestone-87007.firebaseapp.com", // Updated Auth Domain
  projectId: "milestone-87007", // Updated Project ID
  storageBucket: "milestone-87007.appspot.com", // Updated Storage Bucket
  messagingSenderId: "359025969515", // Updated Messaging Sender ID
  appId: "1:359025969515:web:your-app-id", // Replace with actual App ID
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
