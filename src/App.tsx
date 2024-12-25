import styles from './App.module.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { openNewTournamentModal } from './features/modals/modalsSlice'
import NewTournamentModalContainer from './features/modals/new-tournament-modal/NewTournamentModalContainer'
import Tournament from './features/tournament/components/tournament/Tournament'
import { selectTournaments } from './features/tournament/tournamentSlice'

const App = () => {
  const dispatch = useAppDispatch();
  const tournaments = useAppSelector(selectTournaments);
  
  const tournamentComponents = [];
  for (let tournamentId of tournaments.allIds) {
    tournamentComponents.push(<Tournament tournamentId={tournamentId}/>)
  }

  return (
    <div data-theme="dark" className={styles.app}>
      <button onClick={()=>dispatch(openNewTournamentModal())}>
        New Tournament
      </button>
      
      <NewTournamentModalContainer/>
      {tournamentComponents}
    </div>
  )
}

export default App
