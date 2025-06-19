import styles from "./AboutPage.module.css"

const AboutPage = () => {
  
  return (
    <div className={styles.aboutContainer}>
      <h1>О сайте</h1>
      <h2>Возможности</h2>
      <p>Учебный сайт для поиска фильмов и добавления в избранное.</p>
      <p>Реализованы различные списки фильмов, поиск по названию и поиск по параметрам.</p>
      <p>Список фильмов запрашивается по API https://www.themoviedb.org/</p>
      <h2>Использованы следующие технологии:</h2>
      <ul>
        <li>Модульный CSS</li>
        <li>JavaScript</li>
        <li>React - компоненты, хуки, пропсы, условные отрисовки</li>
        <li>React Routes</li>
        <li>RTK Query</li>
        <li>Redux toolkit</li>
      </ul>
    </div>
  )
}

export default AboutPage;
