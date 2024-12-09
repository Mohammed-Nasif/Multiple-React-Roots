import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FirstApp from './Apps/FirstApp';
import SecondApp from './Apps/SecondApp';
import './index.css';

// Create the first root
const firstRoot = createRoot(document.getElementById('root1')!);
firstRoot.render(
  <StrictMode>
    <FirstApp />
  </StrictMode>
);

// Create the second root
const secondRoot = createRoot(document.getElementById('root2')!);
secondRoot.render(
  <StrictMode>
    <SecondApp />
  </StrictMode>
);