import { createSlice } from "@reduxjs/toolkit";

interface modalsSliceState {
  newTournamentModal: boolean;
}

const initialState: modalsSliceState = {
  newTournamentModal: false,
}

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openNewTournamentModal: (state) => {
      state.newTournamentModal = true;
    },
    closeNewTournamentModal: (state) => {
      state.newTournamentModal = false;
    },
  },
  selectors: {
    selectNewTournamentModal: modals => modals.newTournamentModal,
  },
})

export const { openNewTournamentModal, closeNewTournamentModal } = modalsSlice.actions
export const { selectNewTournamentModal } = modalsSlice.selectors