import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import PlayerConextProvider from './context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(  <BrowserRouter>
    <PlayerConextProvider>
      <App />
    </PlayerConextProvider>
  </BrowserRouter>
)
