import React from 'react';
import ReactDOM from 'react-dom/client';
// Components:
import App from './components/App.jsx'
// Contexts:
import LandingContextProvider from './contexts/LandingContext.jsx';
// Style:
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LandingContextProvider>
        <App />
    </LandingContextProvider>
);
