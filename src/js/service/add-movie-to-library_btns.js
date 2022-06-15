import { getUserDataAllWatched, getUserDataAllQueue } from "../api-fetch/get-from-database";
import { userId } from './login';

const load = key => {
    try {
        if (key === "watched-movie-list") {
            return getUserDataAllWatched(userId).then(data => {
                global.watchedCache = Object.values(data);
                return global.watchedCache
            });
        }

        if (key === "queue-movie-list") {
            return getUserDataAllQueue(userId).then(data => {
                global.queueCache = Object.values(data);
                return global.queueCache
            });
        }
    } catch (err) {
        console.error('Get state error: ', err);
    }
};
export { load }