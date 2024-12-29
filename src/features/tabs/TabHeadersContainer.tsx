import { useAppSelector } from "../../app/hooks"
import { selectTournaments } from "../tournament/tournamentSlice"
import NewTabHeader from "./NewTabHeader";
import TabHeader from "./TabHeader";
import styles from './Tabs.module.css'

const TabHeadersContainer = () => {
  const tournamentsIds = useAppSelector(selectTournaments).allIds;
  
  const tabHeaders = [];
  for (let id of tournamentsIds) {
    tabHeaders.push(<TabHeader id={id} key={id}/>)
  }

  return (
    <div className={styles.tab_headers}>
      {tabHeaders}      
      <NewTabHeader/>
    </div>
  )
}

export default TabHeadersContainer