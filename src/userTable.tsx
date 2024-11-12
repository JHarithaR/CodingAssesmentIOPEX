import React, { useState } from 'react';
import { useUsers } from './contextfile/apiContext';

const UserTable = () => {
    const {data,load} = useUsers();
    // if(load) return <p>Loading...</p>
    console.log(data,load);

    const [viewUser,setViewUser] = useState(null);

   const handledetails =(user:any) =>{
    setViewUser(user)
   }

  
  return (
    <>
    <table className='table-auto w-full border-2'>
        <thead className='border-b-2 mb-4 bg-slate-400'>
            <td>
                ID
            </td>
            <td>
                NAME
            </td>
            <td>
                EMAIL
            </td>
            <td>
                COMPANY NAME
            </td>
            <td>
                VIEW
            </td>
        </thead>
        <tbody>
            {data.map((user) =>(
                <tr key = {user.id} className=''>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.company.name}</td>
                    <td><button onClick={() =>handledetails(user)}>View Details</button></td>
                </tr>

            ))}
        </tbody>
    </table>
  {viewUser &&  <div className='mt-6 text-justify'>
        <h2>Individual Details of User with ID {viewUser?.id} </h2>
        <p>Named as {viewUser?.name} existing with Username {viewUser?.username} located in {viewUser?.address?.city} </p>
        <p>ContactDetails:{viewUser?.phone}</p>
        <p>Website:{viewUser?.website}</p>
    </div>}
    </>
  )
}

export default UserTable
