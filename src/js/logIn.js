//Авторизация Google popup



import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();


import { getAuth, signInWithPopup } from "firebase/auth";
const auth = getAuth();
let userId = '';

function logIn() {
  return signInWithPopup(auth, provider)

    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      userId = user.providerData[0].uid;
      console.log(userId);
      return user.email;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export { logIn, userId }

