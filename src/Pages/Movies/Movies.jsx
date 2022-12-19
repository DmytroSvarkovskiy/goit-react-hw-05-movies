import { Wrapper } from 'Pages/Home/Home.styled';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { fetch } from 'components/Fetch';
import { useEffect } from 'react';
import { FilmList, Item, LinkItem, Img } from 'Pages/Home/Home.styled';
import { Form, Label } from './Movies.styled';

const Movies = () => {
  const [qwery, setQwery] = useState('');
  const [searchres, setSearchres] = useState([]);
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();
  const imgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;
  const findFilms = `https://api.themoviedb.org/3/search/movie?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US&query=${qwery}&page=1&include_adult=false`;
  const onSubmit = value => {
    setError(false);
    setSearchres([]);
    if (qwery === value.name) {
      return;
    }
    setQwery(value.name);
  };
  useEffect(() => {
    if (qwery === '') {
      return;
    }
    const getApi = async () => {
      try {
        const getTop = await fetch(findFilms);
        setSearchres(getTop.results);
      } catch {
        setError(true);
      }
    };
    getApi();
  }, [findFilms, qwery]);
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Enter the name of the movie
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Conan"
          />
        </Label>
        <button type="submit">Search</button>
      </Form>
      {error ? (
        <h2>Sorry, something went wrong. Please try again</h2>
      ) : (
        <FilmList>
          {searchres !== [] &&
            searchres.map(({ id, name, title, poster_path }) => (
              <Item key={id}>
                <LinkItem>
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
