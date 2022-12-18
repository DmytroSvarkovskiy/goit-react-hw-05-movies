import { useEffect, useState } from 'react';
import { FilmList, LinkItem, Title, Wrapper } from './Home.styled';

import { fetch } from '../../components/Fetch';
const topFilms =
  'https://api.themoviedb.org/3/trending/all/day?api_key=7bfeb33324f72574136d1cd14ae769b5';
const Home = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  try {
    useEffect(() => {
      const getTop = async () => {
        const filmList = await fetch(topFilms);
        setFilms(filmList.results);
      };
      getTop();
    }, []);
  } catch (error) {
    console.log(error);
    setError(true);
  }

  return (
    <Wrapper>
      {error ? (
        <h2>Sorry, something went wrong</h2>
      ) : (
        <>
          <Title>Trending Today</Title>
          <FilmList>
            {films.map(({ id, name, title }) => (
              <li key={id}>
                <LinkItem>{title ?? name}</LinkItem>
              </li>
            ))}
          </FilmList>
        </>
      )}
    </Wrapper>
  );
};
export default Home;
