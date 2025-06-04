import styles from "./FilteredPage.module.css"
import MovieList from "../../components/movieList/MovieList"
import { useSearchParams } from 'react-router';
import { useGetMovieByFilterQuery } from '../../api/moviesApi';
import { useSelector } from 'react-redux';

export default function FilteredPage() {

const [filterParams] = useSearchParams();
const year = filterParams.get("year");
const rating = filterParams.get("rating");
const genre = filterParams.get("genre");
const bgrPath = useSelector((state)=>state.bgrImg.bgrPath);
const {data: filteredMovie, isLoading: filteredMovieIsLoading} = useGetMovieByFilterQuery({genre, rating, year});

return (
    <div 
      className={styles.searchContainer}
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgrPath}`}}
    >
    {
      filteredMovieIsLoading ? null 
      : <MovieList movies={filteredMovie.results} title="Поиск по фильтру"/>
    }
    </div>
  )
}
