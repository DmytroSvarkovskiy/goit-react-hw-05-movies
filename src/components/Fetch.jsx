import axios from 'axios';
// const topFilms =
//   'https://api.themoviedb.org/3/trending/all/day?api_key=7bfeb33324f72574136d1cd14ae769b5';
// const findFilms = `https://api.themoviedb.org/3/search/movie?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US&query=${word}&page=1&include_adult=false`;
// const fullInfo = `
// https://api.themoviedb.org/3/movie/${movie_id}?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US`;
// const actorsList = `
// https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US`;
// const reviews = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US&page=1`;

export const fetch = async url => {
  const response = await axios.get(url);
  return response.data;
};
