import axios from 'axios';

const KEY = 'AIzaSyBt8eeNPvjELxLOTf4HlRrR1f8tkKCE78s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})