import AboutPage from "./pages/aboutPage/AboutPage";
import AISearchPage from "./pages/aISearchPage/AISearchPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import FilteredPage from "./pages/filteredPage/filteredPage";
import Home from "./pages/homePage/Home";
import LoginPage from "./pages/loginPage/LoginPage";
import MoviePage from "./pages/moviePage/MoviePage";
import SearchPage from "./pages/searchPage/SearchPage";
import Search from "./pages/searchPage/SearchPage";

export const privateRoutes = [
    {path: "/", element: <Home/>},
    {path: "home", element: <Home/>},
    {path: "search", element: <Search/>},
    {path: "error", element: <ErrorPage/>},
    {path: "about", element: <AboutPage/>},
    {path: "AISearch", element: <AISearchPage/>},
    {path: "search", element: <SearchPage />},
    {path: "filteredPage", element: <FilteredPage/>},
    {path: "favorites", element: <FavoritesPage/>},
    {path: "movie/:movieID/", element: <MoviePage/>},
    {path: "*", element: <Home/>}
]

export const publicRoutes = [
    {path: "/", element: <LoginPage/>},
    {path: "login", element: <LoginPage/>},
    {path: "*", element: <LoginPage/>}
]

