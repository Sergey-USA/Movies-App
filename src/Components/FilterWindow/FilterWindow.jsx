import { useState } from 'react';
import ModalWindow from '@ui/modalWindow/ModalWindow';
import MyInput from '@ui/myInput/MyInput';
import styles from "./FilterWindow.module.css"
import { useGetGenresQuery } from '@api/moviesApi';
import MyButton from '@ui/myButton/MyButton';
import { useNavigate } from 'react-router';

const FilterWindow = ({setIsModal}) => {

     const {data: genres,  isLoading: genresIsLoading} = useGetGenresQuery ();
        let navigate = useNavigate();    
        const [movieYear, setMovieYear] = useState("");
        const [movieRating, setMovieRating] = useState("");
        const [selectedGenre, setSelectedGenre] = useState("");

        const filterBtnClick = () => {
            navigate(`/filteredPage?year=${movieYear}&rating=${movieRating}&genre=${selectedGenre}`);
          }


  return (
    <>
     <ModalWindow 
                setIsModal={setIsModal}
             >
                   <h1>Фильм по  параметрам - </h1>
                    <MyInput className={styles.filterInput} value={movieYear} placeholder="Год выхода" onChange={(e)=>setMovieYear(e.target.value)}/>
                    <MyInput  className={styles.filterInput} value={movieRating} placeholder="Минимальный рейтинг" onChange={(e)=>setMovieRating(e.target.value)}/>
                    
                    <label htmlFor="genre">Жанр:</label>
                        <select className={styles.filterInput} id="genre" name="genre" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                        <option value="">Все</option>
                          {genresIsLoading ? null : genres.genres.map((genre)=>(<option key={genre.id} value={genre.id}>{genre.name}</option>))}
                        </select>
                    <MyButton 
                    className = {styles.filterBtn}
                     onClick={filterBtnClick}
                        >Искать</MyButton>
    </ModalWindow>
    </>
  )
}

export default FilterWindow;