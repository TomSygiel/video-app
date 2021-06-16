import axios from 'axios';

const KEY = 'AIzaSyBIcFxe7PGLnibxdVTVUrfdhRoYybFw9Pw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxREsult: 5,
        key: KEY
    }
});



// https://www.googleapis.com/youtube/v3/search