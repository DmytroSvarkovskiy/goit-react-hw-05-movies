import axios from 'axios';

// const reviews = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US&page=1`;

export const fetch = async url => {
  const response = await axios.get(url);
  return response.data;
};
