import styles from "./ModalWindow.module.css"

export default function ModalWindow({children, setIsModal, ...props}) {
  return (
    <div  className={styles.modalWindow} onClick={()=>setIsModal(false)}>
        <div {...props} className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
         {children}
        </div>
    
    </div>
  )
}
