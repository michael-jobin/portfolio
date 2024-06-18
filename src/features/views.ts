import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//default
const viewport = window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical'
const defaultView = viewport === 'horizontal' ? 'pc' : 'sp'

//initial state
interface ViewState {
 view: string
}

const initialState: ViewState = {
 view: defaultView,
}

//slice
const viewSlice = createSlice({
 name: 'view',
 initialState,
 reducers: {
  setView: (state, action: PayloadAction<string>) => {
   state.view = action.payload
  },
 },
})

// export
export const { setView } = viewSlice.actions
export default viewSlice.reducer