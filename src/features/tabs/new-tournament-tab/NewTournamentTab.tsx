import { FormEventHandler, useState } from 'react';
import styles from './NewTournamentTab.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { NewTournamentPayload } from '../../tournament/tournamentTypes';
import { newTournament, selectTournaments } from '../../tournament/tournamentSlice';
import { closeNewTournamentModal } from '../../modals/modalsSlice';
import { switchTab } from '../tabSlice';

const NewTournamentTab = () => {
  const [name, setName] = useState<string>("");
  const [partipants, setParticipants] = useState<string>("");

  const newId = useAppSelector(selectTournaments).allIds.length + 1;
  const dispatch = useAppDispatch();
  const submitTournament: FormEventHandler = (event) => {
    event.preventDefault();
    const payload: NewTournamentPayload = {
      name,
      participantString: partipants,
    };
    dispatch(newTournament(payload));
    dispatch(closeNewTournamentModal());
    dispatch(switchTab({id: newId}))
  }

  return (
    <div className={styles.new_tournament_tab}>
      <form className={styles.form} onSubmit={submitTournament}>
        <div className={styles.fields}>
          <div className={styles.field}>
            <label>Name:</label>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
          </div>
          <div className={styles.field}>
            <label>Participants (each on a separate line):</label>
            <textarea rows={9} onChange={(event) => setParticipants(event.target.value)}/>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.submit_btn}> Generate a new tournament</button>
          <button className={styles.close_btn} onClick={()=>dispatch(closeNewTournamentModal())}>Close</button>
        </div>
      </form>
    </div>
  )
}

export default NewTournamentTab