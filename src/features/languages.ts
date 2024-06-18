import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//get language of the browser
const getInitialLanguage = () => {
 const storedLanguage = localStorage.getItem('language')
 if (storedLanguage) return storedLanguage
 const browserLanguage = navigator.language.split('-')[0]
 return browserLanguage === 'ja' ? 'ja' : 'en'
}

//initial state
interface LanguageState {
 language: string;
}

const initialState: LanguageState = {
 language: getInitialLanguage(),
}

//slice
const languageSlice = createSlice({
 name: 'language',
 initialState,
 reducers: {
  setLanguage: (state, action: PayloadAction<string>) => {
   state.language = action.payload;
   localStorage.setItem('language', action.payload);
  },
 },
})

// export
export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer;