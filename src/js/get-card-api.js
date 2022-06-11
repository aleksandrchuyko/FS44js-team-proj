const axios = require('axios').default;
export { getData };

const API_KEY = "https://api.themoviedb.org/3/movie/"
const  options = {
    responseType: 'stream',
    api_key: "a8de9bbb748883055cd7737934b96801",
}

async function getData(id) {
    try {
        const response = await axios.get(`${API_KEY}${id}`, {
            params: options
        });
        const muvie = response.data;
        return muvie;
    } catch (error) {
        console.log(error);
    }
}