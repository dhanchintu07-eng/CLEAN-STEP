import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Replace with your Firebase config
// Steps to get this:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing one
// 3. Go to Project Settings
// 4. Copy your web app config below

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyC8xU5MpwNxWjY3pZ5qL8n2mK9vX1a4bC5",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "cleanstep-kriovate.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "cleanstep-kriovate",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "cleanstep-kriovate.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789012:web:abc123def456",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
export const storage = getStorage(app);

// Get a reference to Firestore
export const db = getFirestore(app);

export default app;
