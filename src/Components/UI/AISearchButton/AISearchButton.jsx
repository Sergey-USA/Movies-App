import { useNavigate } from "react-router"
import styles from "./AISearchButton.module.css"

export default function AISearchButton() {

  const navigate = useNavigate();
  return (
     <button 
        className={styles.AISearchBtn}
        onClick = {()=> navigate("/AISearch")}
    >
    
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 100 100"
        fill="none"
        className={styles.AISearchIcon}
      >
        <text 
          x="10" 
          y="70" 
          fontSize="70" 
          fontWeight="bold" 
          fill="currentColor"
        >
          AI
        </text>
      </svg>


    </button>
  )
}
