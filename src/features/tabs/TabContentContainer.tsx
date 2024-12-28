import { useAppSelector } from "../../app/hooks"
import Tournament from "../tournament/components/tournament/Tournament"
import NewTournamentTab from "./new-tournament-tab/NewTournamentTab"
import { selectOpenTab } from "./tabSlice"
import styles from './Tabs.module.css'


const TabContentContainer = () => {
  const id = useAppSelector(selectOpenTab);

  return (
    <section className={styles.tab_content}>
      {
        id ?
          <Tournament tournamentId={id}/> :
          <NewTournamentTab/>
      }
    </section>
  )
}

export default TabContentContainer