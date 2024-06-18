import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';

//initial state
interface WorksState {
  list: string[] | undefined;
  currentTag: string
}

const initialState: WorksState = {
  list: undefined,
  currentTag: 'selection',
}

//slice
const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    setWorks: (state, action: PayloadAction<string[]>) => {
      state.list = action.payload
    },
    setCurrentTag: (state, action: PayloadAction<string>) => {
      state.currentTag = action.payload
    },
  },
});

// export
export const { setWorks, setCurrentTag } = worksSlice.actions;
export default worksSlice.reducer;


//fetch function and error handling
export const setError = (error: string) => ({
  type: 'works/setError',
  payload: error,
});
export function fetchWorks() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('../data/works.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const data = await response.json()
      dispatch(setWorks(data.works))
    } catch (error: any) {
      console.error("Failed to fetch works:", error.message);
      dispatch(setError("Failed to load works. Please try again later."))
    }
  };
}

