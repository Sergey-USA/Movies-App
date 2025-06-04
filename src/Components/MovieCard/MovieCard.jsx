import { useNavigate } from "react-router";
import styles from "./MovieCard.module.css"
import { useDispatch } from "react-redux";
import { setBgrImg } from "@features/Background/bgrImgSlice";

function MovieCard ({movie}) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
  
    return (
        <div className={styles.movieCard} onClick = {()=> 
        {
            dispatch(setBgrImg(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`));
            navigate(`/movie/${movie.id}`)}
        }>
            <img className={styles.movieImage} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
        </div>
    )
}

export default MovieCard; 