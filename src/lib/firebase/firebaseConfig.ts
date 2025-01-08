import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5n1Sfc9iyBTDOnR_pejs_Q_d4D4wVBvs",
  authDomain: "sample-firebase-ai-app-2eb94.firebaseapp.com",
  projectId: "sample-firebase-ai-app-2eb94",
  storageBucket: "sample-firebase-ai-app-2eb94.firebasestorage.app",
  messagingSenderId: "170012387016",
  appId: "1:170012387016:web:59ec4e26c214180890e7fd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };