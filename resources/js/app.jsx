import './bootstrap';
import '../css/app.css';
import '../css/index.css';


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './main';

createRoot(document.getElementById('app')).render(<App />);