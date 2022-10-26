// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzKg7MfoZdjSGUskBbhBzm_h0mfk0yiAM",
    authDomain: "dts4a-40-final.firebaseapp.com",
    projectId: "dts4a-40-final",
    storageBucket: "dts4a-40-final.appspot.com",
    messagingSenderId: "1088331587470",
    appId: "1:1088331587470:web:078ab9356fc8248a6e4edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registrasiDenganEmailDanPassword = async(email,KataSandi) => { 
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,KataSandi);

        console.log("User yang sudah keregister adalah",userCredential.user);
    }catch(err){
        console.log(err);

        console.log("CODE",err.code);
        console.log("MSG",err.message);
    }
}

const signInDenganEmailDanPassword = async (email, KataSandi) =>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,KataSandi);

        console.log("User yang sudah login adalah",userCredential.user);
    }catch(err){
        console.log(err);

        console.log("CODE",err.code);
        console.log("MSG",err.message);
    }
}

const keluarDariAplikasiKita = async () => {
    try{
        await signOut(auth);
    }catch(err){
        console.log(err);
    }
}

export {
    auth,
    registrasiDenganEmailDanPassword,
    signInDenganEmailDanPassword,
    keluarDariAplikasiKita
}