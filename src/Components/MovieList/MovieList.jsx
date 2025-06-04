import { useEffect, useRef } from 'react';
import MovieCard from '../movieCard/MovieCard'
import styles from "./MovieList.module.css"


export default function MovieList({movies, title}) {

  const movieListRef = useRef(null);

  useEffect(() => {
    const changeScroll = (event) => {
     event.preventDefault();
     movieListRef.current.scrollLeft += event.deltaY;
    };
    movieListRef.current.addEventListener("wheel", changeScroll, { passive: false });
  
  }, []);

  return (
    <div>
      <h1 className={styles.movieListTitle}>{title}</h1>
      <div className={styles.movieList}
       ref={movieListRef} 
      >
         {
              movies.map((movie)=>(<MovieCard key= {movie.id} movie={movie}></MovieCard>))
         }
      </div>
    </div>
   
  )
}
