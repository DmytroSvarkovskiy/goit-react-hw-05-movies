import { Wrapper } from 'Pages/Home/Home.styled';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetch } from 'components/Fetch';
import Loader from '../../components/Loader/Loader';
import { Arrow, Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const [fullInfo, setFullInfo] = useState({});
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  const firstImgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;

  useEffect(() => {
    const fullInfoLink = `https://api.themoviedb.org/3/movie/${id}?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US`;

    const getApi = async () => {
      setLoader(true);
      try {
        const getInfo = await fetch(fullInfoLink);
        setFullInfo(getInfo);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getApi();
  }, [id]);
  return (
    <Wrapper>
      <Button>
        <Arrow />
        Go back
      </Button>
      {loader && <Loader />}

      <Outlet />
    </Wrapper>
  );
};
export default MovieDetails;
