import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectName } from "../tournament/tournamentSlice";
import { selectOpenTab, switchTab } from "./tabSlice";
import styles from './Tabs.module.css'

interface TabHeaderProps {
  id: number;
}

const TabHeader = ({id}: TabHeaderProps) => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((tournaments) => selectName(tournaments, id));
  const openTab = useAppSelector(selectOpenTab);
  
  const dispatchSwitchTab = () => {
    dispatch(switchTab({id}));
  }

  return(
    <div onClick={dispatchSwitchTab} className={`
      ${styles.tab_header} 
      ${openTab === id ? styles.active_tab_header : ""} 
    `}>
      {name}      
    </div>
  )
}

export default TabHeader