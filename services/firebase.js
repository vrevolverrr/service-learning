import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc, updateDoc, increment } from "firebase/firestore"

const config = {
    apiKey: "AIzaSyBEAx143bjGHa9s0l7ESwwgpwC0ydPcSfk",
    authDomain: "carbonzero-sl.firebaseapp.com",
    projectId: "carbonzero-sl"
};

initializeApp(config);
const db = getFirestore();

export async function getVisitorCount() {
    const document = await getDoc(doc(db, "analytics", "visitors"));
    const count = document.data().count;
    return count;
}

export async function updateVisitorCount() {
    await updateDoc(doc(db, "analytics", "visitors"), {
        count: increment(1)
    });
}