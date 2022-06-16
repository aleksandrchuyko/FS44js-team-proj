// export async function onRenderNextPage(page) {
//   response.page = Number(page);

//   await onRenderLibrary(page);
// }

// <<<<<<< HEAD
// =======
// refs.navLibrary.addEventListener('click', onClickHeaderLibraryBth);
// logoutBtn.addEventListener('click', logOut);

// export function onClickHeaderLibraryBth(e) {
//   if (userId) {
//     setMyLibraryStyles(e);
//   } else {
//     logIn()
//       .then(resolve => {
//         if (resolve === ('user is not defined')||('Firebase: Error (auth/popup-closed-by-user).')) {
//           console.log(resolve);
//           return false;
//         }
//         global.currentUser = resolve;
//         console.log(resolve);
//         logoutBtn.classList.remove('visually-hidden');
//         console.log('Вошел пользователь:', global.currentUser);
//         getUserDataAllWatched(userId).then(data => {
//           global.watchedCache = Object.values(data);
//           // console.log('Массив watched из firebase:', global.watchedCache);
//         });
//         getUserDataAllQueue(userId).then(data => {
//           global.queueCache = Object.values(data);
//           console.log('Массив queue из firebase:', global.queueCache);
//         });
//         setMyLibraryStyles(e);
//       })
//       .catch(reject => {
//         //Тут візов сообщения ошибки авторизации
//         //...
//         console.log(reject);
//       });
//   }
// }
// >>>>>>> main
