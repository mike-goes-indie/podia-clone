import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FooterLinksActiveStateProvider from './Providers/FooterLinksActiveStateProvider.jsx'
import HeaderLinksActiveStateProvider from './Providers/HeaderLinksActiveStateProvider.jsx'
import HelpCenterStateProvider from './Providers/HelpCenterStateProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderLinksActiveStateProvider>
      <FooterLinksActiveStateProvider>
        <HelpCenterStateProvider>
          <App />
        </HelpCenterStateProvider>
      </FooterLinksActiveStateProvider>
    </HeaderLinksActiveStateProvider>
  </React.StrictMode>,
)
