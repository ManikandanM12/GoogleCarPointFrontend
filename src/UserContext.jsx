import { createContext, useEffect, useState } from 'react';
import axios from './axios';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); 

    if (!token) {
      setChecked(true);
      return;
    }

    axios.get('https://googlecarpointproject.onrender.com/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
      withCredentials: true, 
    })
    .then(res => setUser(res.data))
    .catch(() => setUser(null))
    .finally(() => setChecked(true));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, checked }}>
      {children}
    </UserContext.Provider>
  );
}
