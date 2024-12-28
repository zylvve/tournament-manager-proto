import { useAppSelector } from "../../app/hooks"
import { selectTournaments } from "../tournament/tournamentSlice"
import NewTabHeader from "./NewTabHeader";
import TabHeader from "./TabHeader";

const TabHeadersContainer = () => {
  const tournamentsIds = useAppSelector(selectTournaments).allIds;
  
  const tabHeaders = [];
  for (let id of tournamentsIds) {
    tabHeaders.push(<TabHeader id={id}/>)
  }

  return (
    <div>
      {tabHeaders}      
      <NewTabHeader/>
    </div>
  )
}

export default TabHeadersContainer