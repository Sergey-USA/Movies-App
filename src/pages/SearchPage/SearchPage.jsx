import { useState } from "react";
import { useGetMovieByNameQuery} from "@api/moviesApi";
import MyInput from "@ui/myInput/MyInput";
import styles from "./searchPage.module.css";
import MovieList from "@components/movieList/MovieList";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

const SearchPage = () => {
 const [searchInput, setSearchInput] = useState("");
 const [searchQuery, setSearchQuery] = useState('');

 const {data: searcedMovies, isLoading: searcedIsLoading} = useGetMovieByNameQuery (searchQuery);
 const bgrPath = useSelector((state)=>state.bgrImg.bgrPath);
 
 const searchMovie = debounce((value) => {
        setSearchQuery(value);
    }, 1500);

 const handleChange = (e) => {
    setSearchInput(e.target.value);
    searchMovie(e.target.value);
 };

    return (
        <div 
            className={styles.searchContainer} 
            style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgrPath}`}}
        >
        <div className={styles.searchBox}>
            <MyInput 
                className={styles.searchInput}
                placeholder = "Найти"
                value = {searchInput}
                onChange = {handleChange}
            ></MyInput>
         </div>
            <div>
                {!searcedIsLoading? <MovieList movies={searcedMovies.results} title=""/> : <div>Идет загрузка</div>}
            </div>
        </div>
       )
}

export default SearchPage;