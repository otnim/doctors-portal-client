import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../src/firebase/firebase.config';

export const ThemeContext = createContext();
const auth = getAuth(app);

const ThemeProvider = () => {

    return (
        <div>
            
        </div>
    );
};

export default ThemeProvider;