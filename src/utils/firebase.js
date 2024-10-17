import { initializeApp } from "firebase/app";

import firebaseConfig from "../../firebase.config.js";

const connect = () => initializeApp(firebaseConfig);

export { connect };
