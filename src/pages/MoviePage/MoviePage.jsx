import { useParams } from "react-router";
import { useGetMovieByIdQuery } from "../../api/moviesApi";
import styles from "./MoviePage.module.css";
import MyButton from "../../Components/UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { addFavorites } from "../../Features/Favorites/favoritesSlice";

function MoviePage () {
    const id = useParams().movieID;
    const { data, isLoading } = useGetMovieByIdQuery(id);
    const genres = (data?.genres || []).map(genre => genre.name).join(", ") || "";
    const dispatch = useDispatch();

    function newFavorites (data) {
        dispatch(addFavorites(data));
    }
    
    return <>
    {isLoading ? <div> Идет загрузка </div> : 
      <div
        className={styles.movieContainer}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`
        }}
      >
        <div className={styles.movieCard}>
              <div >
                  <img className={styles.movieImage} src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt={data.title} />
              </div>
              <div className={styles.movieTextCard}>
                  <h3 className={styles.movieTitle}>{data.title}</h3>
                  <p className={styles.movieText}>Рейтинг: {data.vote_average.toFixed(1)}</p>
                  <p className={styles.movieText}>{data.release_date.slice(0, 4)} {genres}</p>
                  <div className={styles.movieTextButtons}>
                      <MyButton className={styles.favBtn} onClick={()=>newFavorites(data)}>В избранное</MyButton>
                  </div>
        </div>
      </div>
    </div>
    }
    </>
}

export default MoviePage;