import { FormEventHandler, useState } from 'react';
import styles from './NewTournamentModal.module.css'
import { useAppDispatch } from '../../../app/hooks';
import { NewTournamentPayload } from '../../tournament/tournamentTypes';
import { newTournament } from '../../tournament/tournamentSlice';
import { closeNewTournamentModal } from '../modalsSlice';

const NewTournamentModal = () => {
  const [name, setName] = useState<string>("");
  const [partipants, setParticipants] = useState<string>("");

  const dispatch = useAppDispatch();
  const submitTournament: FormEventHandler = (event) => {
    event.preventDefault();
    const payload: NewTournamentPayload = {
      name,
      participantString: partipants,
    };
    dispatch(newTournament(payload));
    dispatch(closeNewTournamentModal());
  }

  return(
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <form className={styles.form} onSubmit={submitTournament}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Name:</label>
              <input type="text" onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={styles.field}>
              <label>Participants (each on a separate line):</label>
              <textarea rows={8} onChange={(event) => setParticipants(event.target.value)}/>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.submit_btn}> Generate a new tournament</button>
            <button className={styles.close_btn} onClick={()=>dispatch(closeNewTournamentModal())}>Close</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewTournamentModal;