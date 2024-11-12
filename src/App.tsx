import { useEffect, useState } from 'react';
import './App.css';
import { ApiContext } from './contextfile/apiContext';
import UserTable from './userTable';


function App() {
  const [theme, setTheme] = useState('light');
  const toggleMode =() =>{
    setTheme(theme === 'light'? 'dark':'light')
  }
  useEffect(() =>{
    if(theme ==='dark')
    {
        document.querySelector('html')?.classList.add('dark')
    }
    else
    {
      document.querySelector('html')?.classList.remove('dark')
    }
  },[theme])
  return (
   <ApiContext>
    <div className='flex mb-2 justify-between dark:bg-black'>
    <h1 className='text-center text-3xl text-black mb-4 dark:text-white '> User Management Dashboard</h1> 
    <button onClick = {toggleMode} className='bg-orange-300 p-2  dark:text-white'>{ (theme ==='dark')?'Light Mode':'Dark Mode'}</button>
    </div>
    <UserTable/>
    </ApiContext>
  )
}

export default App
