import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './assets/style/base/reset.scss'
import './assets/style/themes/dark.module.scss'
import './assets/style/themes/light.module.scss'
import App from './App.tsx'
import { setupStore } from './redux/store.tsx'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
    </Provider>,
)
