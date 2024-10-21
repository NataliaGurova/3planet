import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
        {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>,
)

