import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectName } from "../tournament/tournamentSlice";
import { switchTab } from "./tabSlice";

interface TabHeaderProps {
  id: number;
}

const TabHeader = ({id}: TabHeaderProps) => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((tournaments) => selectName(tournaments, id));
  
  const dispatchSwitchTab = () => {
    dispatch(switchTab({id}));
  }

  return(
    <div onClick={dispatchSwitchTab}>
      {name}      
    </div>
  )
}

export default TabHeader