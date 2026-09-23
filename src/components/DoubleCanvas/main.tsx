import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import {Visualizator} from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Visualizator />
  </StrictMode>,
)
