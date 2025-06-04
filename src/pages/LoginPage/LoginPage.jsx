 import { useDispatch } from "react-redux";
import styles from "./LoginPage.module.css"
import { login } from "../../Features/Auth/authSlice";
import MyInput from "../../components/ui/myInput/MyInput";
import MyButton from "../../components/ui/myButton/MyButton";

function LoginPage () {
    const dispatch = useDispatch();
     
    return (
        <div className={styles.container}>
            <div className={styles.loginPage}>
              <MyInput placeholder="Введите логин" className={styles.loginInput}/>
              <MyInput placeholder="Введите пароль" className={styles.loginInput}/>
              <MyButton onClick={()=> dispatch(login())} className={styles.loginBtn}>Войти</MyButton>
              </div>
            </div>    
    )
}

export default LoginPage;