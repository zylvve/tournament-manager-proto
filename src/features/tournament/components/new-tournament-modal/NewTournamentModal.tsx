import styles from './NewTournamentModal.module.css'

const NewTournamentModal = () => {
  return(
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <form className={styles.form}>
          <div>
            <label>Name:</label>
            <input type="text"/>
          </div>
          <div>
            <label>Participants:</label>
            <textarea/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewTournamentModal;