import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

initializeApp(config);
const db = getFirestore();

export async function updateAnalytics(cookies) {
    const ref = doc(db, "analytics", "visitors");

    const document = await getDoc(ref);
    const uniqueCount = document.data().count;
    
    if (cookies == undefined) {
        updateDoc(ref, {
            count: uniqueCount + 1
        });    
    }

    return uniqueCount + 1;
}