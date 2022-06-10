import { getDatabase, ref, set, push } from "firebase/database";

export default function writeUserData(userId, filmId, data) {
    const db = getDatabase();
  set(ref(db, 'users/' + userId + '/watched/' + filmId), {
    ...data
  });
}