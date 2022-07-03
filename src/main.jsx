import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './APP/store'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

import App from './pages/App'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
