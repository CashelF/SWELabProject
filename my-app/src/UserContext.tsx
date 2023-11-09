import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextState {
  username: string;
  setUsername: (username: string) => void;
}


const UserContext = createContext<UserContextState | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}


export const UserProvider = ({ children }: UserProviderProps) => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = (): UserContextState => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
