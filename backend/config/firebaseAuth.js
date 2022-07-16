import "dotenv/config";
import { initializeApp } from "firebase/app";

const firebaseAuth = async () => {
  try {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyD8Nw1fT3TaJsrt26gI4wy303YYhOQFmCM",
      authDomain: "news-e8334.firebaseapp.com",
      projectId: "news-e8334",
      storageBucket: "news-e8334.appspot.com",
      messagingSenderId: "462896905525",
      appId: "1:462896905525:web:f1b65ab4f806eaafdd607c",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  } catch (error) {
    console.log(error);
  }
};
export default firebaseAuth;
