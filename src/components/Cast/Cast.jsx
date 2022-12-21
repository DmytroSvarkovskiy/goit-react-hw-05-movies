import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { fetch } from 'components/Fetch';
import { Img, List, Item, P } from './Cast.styled';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const firstImgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;

  useEffect(() => {
    setError(false);
    const actorsList = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US`;
    const getApi = async () => {
      setLoader(true);
      try {
        const getInfo = await fetch(actorsList);
        setCast(getInfo.cast);
        getInfo.cast.length === 0 && toast("Sorry, we didn't find anything");
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
      {error && <h2>Sorry, something went wrong. Please try again</h2>}
      <ToastContainer />
      <List>
        {loader ? (
          <Loader />
        ) : (
          cast.map(({ id, character, name, profile_path }) => (
            <Item key={id}>
              <Img
                loading="lazy"
                src={profile_path ? firstImgLink + profile_path : defaultImg}
                alt={name}
              />
              <P>{name}</P>
              <P>Character: {character ? character : 'undefined'}</P>
            </Item>
          ))
        )}
      </List>
    </>
  );
};
export default Cast;
