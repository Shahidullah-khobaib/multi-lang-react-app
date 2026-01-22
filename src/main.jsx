// د React app د پیل لپاره اصلي فایل
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// د React app د DOM کې د render کولو لپاره
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);