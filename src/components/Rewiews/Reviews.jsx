import { useParams } from 'react-router-dom';
import { fetch } from 'components/Fetch';
import { useState, useEffect } from 'react';
import { Item } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const reviewsLink = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US&page=1`;

    const getApi = async () => {
      try {
        const getInfo = await fetch(reviewsLink);
        setReviews(getInfo.results);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    getApi();
  }, [id]);
  return (
    <div>
      {reviews.length === 0 ? (
        <h3>Sorry, we didn't find anything</h3>
      ) : (
        <ul>
          {reviews.map(({ author, content }) => (
            <Item key={author}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </Item>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Reviews;
