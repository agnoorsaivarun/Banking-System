import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContentRoute from './routes/content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContentRoute/>
  </React.StrictMode>
);


