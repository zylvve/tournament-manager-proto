import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectOpenTab, switchTab } from "./tabSlice";
import styles from './Tabs.module.css'

const NewTabHeader = () => {
  const dispatch = useAppDispatch();
  const dispatchSwitchTab = () => {
    dispatch(switchTab({id: 0}));
  }
  const openTab = useAppSelector(selectOpenTab);

  return(
    <div onClick={dispatchSwitchTab} className={`
      ${styles.tab_header} 
      ${openTab === 0 ? styles.active_tab_header : ""} 
    `}>
      New Tournament
    </div>
  )
}

export default NewTabHeader