import { useSelector } from "react-redux";
import styles from "./AISearchPage.module.css"
import { useState } from "react";
import { useAIApi } from "@api/useAIApi";
import MyInput from "@components/ui/myInput/MyInput";

import MyButton from "@ui/myButton/MyButton";
import { useGetMovieByNameQuery } from "@api/moviesApi";
import MovieList from "@components/movieList/MovieList";

const AISearchPage = () => {

const bgrPath = useSelector((state)=>state.bgrImg.bgrPath);

const [apiKey, setApiKey] = useState("");
const [userQuery, setUserQuery] = useState("");
const [movie, setMovies] = useState(null);

const {fetchMovieName, isLoading} = useAIApi();
const {data: searchedMovies, isLoading: moviesLoading} = useGetMovieByNameQuery(movie, {
    skip: !movie,
  });


const submitBtn = async () => {
  
    setMovies(null);
    try {
        const aiMovie = await fetchMovieName(apiKey, userQuery);
        setMovies(aiMovie);
         
    } catch (err) {alert(err)}

}


  return (

      <div className={styles.searchContainer} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgrPath}`}}>
        <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
            <h1>Поиск с AI meta-llama/llama-4-scout:free - </h1>
            <p>Я помогу найти фильм который наиболее подходит под описание, но для этого мне нужен APIKey openrouter.ai</p>
            <p>!!! Используйте ключ чистого аккаунта без привязанных платежных данных. Не используй ключ с платежными данными!!! модель хоть и пока бесплатна, но в будущем может измениться</p>

            <MyInput className={styles.AIInput} value={apiKey} placeholder="Введите API Key" onChange={(e)=>setApiKey(e.target.value)}/>
            <p>Введите описание фильма, который нужно найти</p>
                
            <textarea className={styles.AIInput} value={userQuery} placeholder="Описание фильма" onChange={(e)=>setUserQuery(e.target.value)}></textarea>
            
                    <MyButton 
                        className = {styles.AIBtn}
                        onClick={(submitBtn)}
                        disabled={!apiKey.trim() || !userQuery.trim()}
                    >Искать</MyButton>
            </div>
        </div>
           
      
      {isLoading || moviesLoading ? <p>Загрузка данных</p>: null} 

      {searchedMovies?.results?.length > 0 && (<MovieList movies={searchedMovies.results} title="Найденные фильмы по описанию"/>)}
       

    </div>
  )
}


export default AISearchPage;