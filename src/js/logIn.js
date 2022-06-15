//Авторизация Google popup
import { auth , userId} from './service/init-firebase';
import { logoutBtn } from './utils/references';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

import { signInWithPopup , signOut} from 'firebase/auth';
// const auth = getAuth();

function logIn() {
  return signInWithPopup(auth, provider).then(result => {
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

