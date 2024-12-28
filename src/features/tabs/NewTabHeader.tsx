import { useAppDispatch } from "../../app/hooks"
import { switchTab } from "./tabSlice";

const NewTabHeader = () => {
  const dispatch = useAppDispatch();
  const dispatchSwitchTab = () => {
    dispatch(switchTab({id: 0}));
  }

  return(
    <div onClick={dispatchSwitchTab}>
      New Tournament
    </div>
  )
}

export default NewTabHeader