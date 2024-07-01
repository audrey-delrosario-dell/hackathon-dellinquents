import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// supporting bootstrap installation
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

// supporting Dell Style 
// React (Required)
import "@dds/react/css/dds-components.css";

// Foundations (Highly recommended)
import "@dds/react/css/dds-reboot.css";
import "@dds/react/css/dds-fonts.css";
import "@dds/react/css/dds-icons.css";

// Foundations (Optional)
import "@dds/react/css/dds-main.css";
import "@dds/react/css/dds-helpers.css";
import "@dds/react/css/dds-templates.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
