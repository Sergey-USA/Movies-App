import styles from "./ModalWindow.module.css"

const ModalWindow = ({children, setIsModal, ...props}) => {

  const closeFilterModal = () => {
    setIsModal(false);
  }
  return (
    <div  className={styles.modalWindow} onClick={closeFilterModal}>
        <div {...props} className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
         {children}
        </div>
    
    </div>
  )
}

export default ModalWindow