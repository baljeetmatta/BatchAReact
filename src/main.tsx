import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Greet from './Greet.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Greet name="CodeQuotient" years={12}/>
    <Greet name="Chitkara"/>
    

  </StrictMode>,
)
