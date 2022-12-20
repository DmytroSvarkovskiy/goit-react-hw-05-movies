import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { fetch } from 'components/Fetch';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const firstImgLink = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    const actorsList = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US`;
    const getApi = async () => {
      setLoader(true);
      try {
        const getInfo = await fetch(actorsList);
        setCast(getInfo.cast);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getApi();
  }, [id]);

  return (
    <>
      {error ? (
        <h2>Sorry, something went wrong. Please try again</h2>
      ) : (
        <ul>
          {loader ? (
            <Loader />
          ) : (
            cast.length > 0 &&
            cast.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                <img src={firstImgLink + profile_path} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))
          )}
        </ul>
      )}{' '}
    </>
  );
};
export default Cast;
