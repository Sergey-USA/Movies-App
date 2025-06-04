import { NavLink } from "react-router";
import MyButton from "../ui/myButton/MyButton";
import styles from "./NavMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Features/Auth/authSlice";

function NavMenu () {
    const isAuth = useSelector((state)=>state.auth.isAuth)
    const dispatch = useDispatch();
    
    return (
        <nav className={styles.navMenu}>
            <NavLink 
                to = "/"
                end
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.inactiveLink
                }
            >
                Home
            </NavLink>

            <NavLink 
                to = "/login"
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.inactiveLink
                }
            >
                Логин
            </NavLink>
            
            <NavLink 
                to = "/error"
                end
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.inactiveLink
                }
            >
                Ошибка
            </NavLink>

            <NavLink 
                to = "/about"
                end
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.inactiveLink
                }
            >
                About
            </NavLink>

            <NavLink 
                to = "/favorites"
                end
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.inactiveLink
                }
            >
                Избранное
            </NavLink>

            {
            (isAuth) && <MyButton className={styles.exitBtn} onClick={()=> dispatch(logout())}>Выйти</MyButton>
            }

        </nav>
    )
}

export default NavMenu;