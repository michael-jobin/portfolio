import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store.ts'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
