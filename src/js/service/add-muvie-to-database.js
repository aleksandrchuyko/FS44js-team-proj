import { writeUserDataWatched, writeUserDataQueue } from '../api-fetch/add-to-database';
import { WATCHED, QUEUE } from '../utils/constants';

export function addMovieToDatabase(key, userId, muvieId, data) {
  if (key === WATCHED) {
    writeUserDataWatched(userId, muvieId, data);
    writeUserDataQueue(userId, muvieId);
  }
  else if (key === QUEUE) {
    writeUserDataWatched(userId, muvieId);
    writeUserDataQueue(userId, muvieId, data);
  }
  

}