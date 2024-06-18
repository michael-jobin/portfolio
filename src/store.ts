import { configureStore } from "@reduxjs/toolkit"
import works from "./features/works"
import languages from "./features/languages"
import views from "./features/views"

export const store = configureStore({
 reducer: {
  works,
  languages,
  views,
 },
 // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* other middlewares */),
})