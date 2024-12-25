import { useAppSelector } from "../../../app/hooks";
import { selectNewTournamentModal } from "../modalsSlice";
import NewTournamentModal from "./NewTournamentModal";

const NewTournamentModalContainer = () => {
  const showModal = useAppSelector(selectNewTournamentModal);

  return (
    <>
     {showModal ? <NewTournamentModal/> : <></>}
    </>
  )
}

export default NewTournamentModalContainer