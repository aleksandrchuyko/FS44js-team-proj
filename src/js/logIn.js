//Авторизация Google popup
import { auth , userId} from './service/init-firebase';
import { logoutBtn } from './utils/references';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

import { signInWithPopup , signOut} from 'firebase/auth';
// const auth = getAuth();
// console.log(auth);
let userId = '';

function logIn() {
  return signInWithPopup(auth, provider).then(result => {

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // userId = user.providerData[0].uid;
    console.log(userId);
    // console.log(auth);
      return user.email;


    }).catch((error) => {

      // Handle Errors here.
      const errorMessage = error.message;
      return errorMessage;
    });
}

function logOut() {
  
  signOut(auth).then(() => {
    logoutBtn.classList.add('visually-hidden');
    location.reload();
}).catch((error) => {
  // An error happened.
});
}

export { logIn, logOut, userId };

