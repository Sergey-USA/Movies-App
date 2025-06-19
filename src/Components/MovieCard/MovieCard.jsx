import { useNavigate } from "react-router";
import styles from "./MovieCard.module.css"
import { useDispatch } from "react-redux";
import { setBgrImg } from "@features/Background/bgrImgSlice";

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMoviePage = () => {
        dispatch(setBgrImg(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`));
        navigate(`/movie/${movie.id}`)
    };
    
  
    return (
        <div className={styles.movieCard} onClick = {openMoviePage}>
            <img className={styles.movieImage} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h1 className={styles.movieTitle}>{movie.title}</h1>
        </div>
    )
}

export default MovieCard; 