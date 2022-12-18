import { useEffect, useState } from 'react';
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
        setFilms(filmList.hits);
      };
      getTop();
    }, []);
  } catch {
    setError(true);
  }
  return (
    <ul>
      <li>lalalla</li>
    </ul>
  );
};
export default Home;
