import AboutPage from "./pages/AboutPage/AboutPage";
import AISearchPage from "./pages/AISearchPage/AISearchPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import FilteredPage from "./pages/filteredPage/filteredPage";
import Home from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Search from "./pages/SearchPage/SearchPage";

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

