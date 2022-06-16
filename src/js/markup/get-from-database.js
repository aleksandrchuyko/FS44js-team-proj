// import { getDatabase, ref, child, get } from "firebase/database";

async function getUserDataAllWatched(userId) {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/${userId}/watched`));
  console.log(Object.values(snapshot));
  // then((snapshot) => {

  if (snapshot.exists()) {
    // console.log(snapshot.val());
    return Object.values(snapshot.val());
  } else {
    console.log('No data available');
  }
  // console.log(Object.values(snapshot.val()))
  // }).catch((error) => {
  //     console.error(error);
  // });
}

// async function getUserDataAllQueue(userId) {
//     const dbRef = ref(getDatabase());
//     return get(child(dbRef, `users/${userId}/queue`)).then((snapshot) => {
//         if (snapshot.exists()) {
//             // console.log(snapshot.val());
//             return snapshot.val();
//         } else {
//             console.log("No data available");
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
// }

// export { getUserDataAllWatched, getUserDataAllQueue }
