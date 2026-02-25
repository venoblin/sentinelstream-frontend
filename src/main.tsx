import './index.css'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/300-italic.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/400-italic.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/500-italic.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/600-italic.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/700-italic.css'
import '@fontsource/open-sans/800.css'
import '@fontsource/open-sans/800-italic.css'
import '@fontsource/pt-mono/400.css'
import '@salt-ds/theme/index.css'
import '@salt-ds/theme/css/theme-next.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SaltProviderNext } from '@salt-ds/core'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import AuthProvider from './contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SaltProviderNext
          mode="dark"
          accent="teal"
          corner="rounded"
          headingFont="Amplitude"
          actionFont="Amplitude"
        >
          <App />
        </SaltProviderNext>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
