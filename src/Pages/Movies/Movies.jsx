import { Wrapper } from 'Pages/Home/Home.styled';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { fetch } from 'components/Fetch';
import { useEffect } from 'react';
import { FilmList, Item, LinkItem, Img } from 'Pages/Home/Home.styled';
import { Form, Input, Button, Label } from './Movies.styled';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [qwery, setQwery] = useState('');
  const [searchres, setSearchres] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const { register, handleSubmit } = useForm();
  const imgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;
  const findFilms = `https://api.themoviedb.org/3/search/movie?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US&query=${qwery}&page=1&include_adult=false`;
  const onSubmit = value => {
    if (qwery === value.name) {
      return;
    }
    setError(false);
    setSearchres([]);

    setQwery(value.name);
  };
  useEffect(() => {
    if (!qwery) {
      return;
    }
    const getApi = async () => {
      setLoader(true);
      try {
        const getTop = await fetch(findFilms);
        setSearchres(getTop.results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getApi();
  }, [findFilms, qwery]);
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Enter the name of the movie</Label>
        <div>
          <Input
            type="text"
            {...register('name', { required: true })}
            placeholder="Conan"
          />

          <Button type="submit">Search</Button>
        </div>
      </Form>
      {loader && <Loader />}
      {error ? (
        <h2>Sorry, something went wrong. Please try again</h2>
      ) : (
        <FilmList>
          {searchres !== [] &&
            searchres.map(({ id, name, title, poster_path }) => (
              <Item key={id}>
                <LinkItem to={`/movies/${id}`}>
                  {' '}
                  <Img
                    src={poster_path ? imgLink + poster_path : defaultImg}
                    alt={name}
                    loading="lazy"
                  />
                  {title ?? name}
                </LinkItem>
              </Item>
            ))}
        </FilmList>
      )}
    </Wrapper>
  );
};
export default Movies;