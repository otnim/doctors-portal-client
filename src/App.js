import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes/Routes';


function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div data-theme={theme} className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
