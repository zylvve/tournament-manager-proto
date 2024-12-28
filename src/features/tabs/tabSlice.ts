import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TabSliceState {
  openTab: number;
}

interface SwitchTabPayload {
  id: number;
}

const initialState: TabSliceState = {
  openTab: 0,
}

export const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    switchTab: (state, action: PayloadAction<SwitchTabPayload>) => {
      state.openTab = action.payload.id;
    }    
  },
  selectors: {
    selectOpenTab: tabs => tabs.openTab,
  },  
})

export const { selectOpenTab } = tabSlice.selectors
export const { switchTab } = tabSlice.actions