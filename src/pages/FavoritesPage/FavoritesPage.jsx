import styles from "./FavoritesPage.module.css"
import MovieList from '../../Components/MovieList/MovieList';
import { useSelector } from 'react-redux';

export default function FavoritesPage() {

 const favorites = useSelector((state)=>state.favorites);
 const bgrPath = useSelector((state)=>state.bgrImg.bgrPath);

  return (
    <div className={styles.favoritesPage} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgrPath}`}}>
        <MovieList movies = {favorites} title = "Избранное"></MovieList>
    </div>
  )
}
