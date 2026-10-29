import React from 'react';
import {createRoot} from 'react-dom/client';
import Kotobox from './kotobox';
createRoot(document.getElementById('root')!).render(<Kotobox signedIn={false}/>);
