
import { Route, Routes } from 'react-router'
import './App.css'
import { privateRoutes, publicRoutes } from './routes'
import { useSelector } from 'react-redux'
import NavMenu from '@components/navMenu/NavMenu'

function App() {
  const isAuth = useSelector((state)=>state.auth.isAuth)
  console.log("sdfsdf") //Он тут для ESLint

  return (
    <div className='App'>
      <NavMenu />
      <Routes>
       {isAuth
          ? privateRoutes.map((route)=>(<Route key = {route.path} path = {route.path} element = {route.element}></Route>))
          : publicRoutes.map((route)=>(<Route key = {route.path} path = {route.path} element = {route.element}></Route>))
        }
      </Routes>
    </div>
  )
}

export default App
