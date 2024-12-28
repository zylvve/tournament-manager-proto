import styles from './Tabs.module.css'
import TabContentContainer from "./TabContentContainer"
import TabHeadersContainer from "./TabHeadersContainer"

const TournamentTabsContainer = () => {
  return (
    <main className={styles.tournament_tabs}>
      <TabHeadersContainer/>
      <TabContentContainer/>
    </main>
  )
}

export default TournamentTabsContainer