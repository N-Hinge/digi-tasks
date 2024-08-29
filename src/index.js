import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css'; // Tailwind imports
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
