import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { WalletProvider } from '@coinbase/waas-sdk-web-react';

const PROJECT_ID = location.hash.slice(1);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <WalletProvider
    projectId={PROJECT_ID}
    verbose
    collectAndReportMetrics
    enableHostedBackups
    autoCreateWallet
    prod={true}
  >
    <p style={{ textAlign: 'center' }}>PROJECT_ID={PROJECT_ID}</p>
    <App />
  </WalletProvider>,
  // </React.StrictMode>
);
