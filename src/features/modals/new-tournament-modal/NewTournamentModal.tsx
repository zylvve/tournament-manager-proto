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
          <div>
            <label>Name:</label>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
          </div>
          <div>
            <label>Participants:</label>
            <textarea onChange={(event) => setParticipants(event.target.value)}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewTournamentModal;