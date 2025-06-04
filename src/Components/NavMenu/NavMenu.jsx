import { NavLink } from "react-router";
import MyButton from "../ui/myButton/MyButton";
import styles from "./NavMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@features/Auth/authSlice";
import { useEffect, useState } from "react";

function NavMenu () {
    const isAuth = useSelector((state)=>state.auth.isAuth)
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const [animation, setAnimation] = useState(false);

    useEffect(()=>{
        setAnimation(true);
        setTimeout(() => setAnimation(false), 500);
    },[favorites])
    
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
                     `${isActive ? styles.activeLink : styles.inactiveLink} ${animation ? styles.pulse : ""}`
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