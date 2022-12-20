import { Wrapper } from 'Pages/Home/Home.styled';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetch } from 'components/Fetch';
import Loader from '../../components/Loader/Loader';
import {
  Arrow,
  Button,
  Wrap,
  Cont,
  P,
  Img,
  AdditionalDiv,
  LinkDiv,
  LinkInfo,
} from './MovieDetails.styled';

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
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getApi();
  }, [id]);
  const {
    poster_path,
    name,
    genres,
    overview,
    vote_average,
    title,
    release_date,
  } = fullInfo;

  if (!release_date) {
    return;
  }
  return (
    <Wrapper>
      {loader && <Loader />}
      <Button>
        <Arrow />
        Go back
      </Button>
      {error && <h2>Sorry, something went wrong. Please try again</h2>}

      <>
        <Wrap>
          <Img
            src={poster_path ? firstImgLink + poster_path : defaultImg}
            alt={title ?? name}
          />
          <Cont>
            <h3>
              {title ?? name} ({release_date.slice(0, 4)})
            </h3>
            <P>User Score: {(vote_average * 10).toFixed(1)}%</P>
            <h4>Overview</h4>
            <P>{overview}</P>
            <h4>Genres</h4>
            <P>{genres.map(({ name }) => name).join(', ')}</P>
          </Cont>
        </Wrap>
        <AdditionalDiv>
          <h4>Additional Information</h4>
          <LinkDiv>
            <LinkInfo to="cast">Cast</LinkInfo>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </LinkDiv>
        </AdditionalDiv>
        <Outlet />
      </>
    </Wrapper>
  );
};
export default MovieDetails;
