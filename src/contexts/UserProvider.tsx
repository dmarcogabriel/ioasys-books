import React, {createContext, useState} from 'react';

interface User {
  name: string;
  email: string;
  birthdate: string;
  gender: string;
  id: string;
}

interface UserContextValue {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({children}: UserProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  const login = (data: User): void => {
    setUser(data);
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};
