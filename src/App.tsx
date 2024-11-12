import { useState } from 'react';
import './App.css';
import { ApiContext } from './contextfile/apiContext';
import UserTable from './userTable';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode =() =>{
    setDarkMode(!darkMode);
    if(!darkMode)
    {
      document.documentElement.classList.add('dark');
    }
    else
    {
      document.documentElement.classList.remove('dark');

    }
  }
  return (
   <ApiContext>
    <button onClick = {toggleMode}>{darkMode ?'Light Mode':'Dark Mode'}</button>
    <h1 className='text-center text-3xl text-black mb-4 dark:text-white '> User Management Dashboard</h1> 
    <UserTable/>
    </ApiContext>
  )
}

export default App
