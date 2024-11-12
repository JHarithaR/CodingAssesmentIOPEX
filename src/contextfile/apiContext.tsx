import { createContext,ReactNode,useContext, useEffect, useState } from "react";

interface Geo {
        lat: string;
        lng: string;
}

interface Address
{
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: Geo;
}

interface Company{
        name: string;
        catchPhrase: string;
        bs: string;
}


export interface UserDetails {
  id: number;
  name: string;
  username:string;
  email: string;
  address:Address;
  phone: string;
  website: string;
  company: Company;
}

interface userContextType
{
    data:UserDetails[];
    load:boolean;
    error: string |null;
}

const APIdata= createContext<userContextType |undefined>(undefined);

export const ApiContext: React.FC<{children:ReactNode}>= ({children}) => {
  const [data, setData] = useState<UserDetails[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  const[error,setError] = useState<string|null>(null);

  const url: string = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    setLoad(true);
    const fetchUsers = async () =>{
        try{
            const response = await fetch(url);
            if(!response.ok)
            {
                throw new Error('failed')
            }
            const data: UserDetails[] = await response.json();
            setData(data);
            setLoad(true)
        }
        catch(err:any)
        {
           setError(err.message) 
        }
        finally
        {
            setLoad(false)
        }
    };
    fetchUsers();
  
  }, []);
  console.log(data, load,error);
  return (
    <APIdata.Provider value={{data,load, error}}>
    {children}
    </APIdata.Provider>
  );
};


export const useUsers = ():userContextType => {
const contextData = useContext(APIdata);
if(contextData === undefined)
{
    throw new Error("CONTEXT DATA UNDEFINED")
}
return contextData;
}
