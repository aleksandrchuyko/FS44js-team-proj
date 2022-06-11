import { getDatabase, ref, set, push } from "firebase/database";

function writeUserDataWatched(userId, filmId, data) {
    const db = getDatabase();
  set(ref(db, 'users/' + userId + '/watched/' + filmId), {
    ...data
  });
}

function writeUserDataQueue(userId, filmId, data) {
    const db = getDatabase();
  set(ref(db, 'users/' + userId + '/queue/' + filmId), {
    ...data
  });
}

export {writeUserData, writeUserDataQueue}