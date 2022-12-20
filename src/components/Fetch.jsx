import axios from 'axios';

// const actorsList = `
// https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US`;
// const reviews = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US&page=1`;

export const fetch = async url => {
  const response = await axios.get(url);
  return response.data;
};
