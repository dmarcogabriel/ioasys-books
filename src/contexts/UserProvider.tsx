import React, {createContext, useState, useEffect, useCallback} from 'react';
import {User} from '../@types/user.interface';
import {storeData, removeData, getData} from '../utils/storage';
import {AUTH_TOKEN_STORAGE_KEY} from '../constants';

interface UserContextValue {
  user: User | null;
  login: (user: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
  token: string | null;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  token: null,
  login: async () => {},
  logout: async () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({children}: UserProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (data: User, authToken: string): Promise<void> => {
    setUser(data);
    setToken(authToken);
    await storeData(AUTH_TOKEN_STORAGE_KEY, authToken);
  };

  const logout = async () => {
    await removeData(AUTH_TOKEN_STORAGE_KEY);
    setUser(null);
    setToken(null);
  };

  const loadToken = useCallback(async () => {
    setIsLoading(true);
    try {
      const authToken = await getData<string>(AUTH_TOKEN_STORAGE_KEY);
      if (authToken) {
        setToken(authToken);
      }
    } catch (error) {
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadToken();
  }, [loadToken]);

  return (
    <UserContext.Provider value={{user, token, login, logout}}>
      {!isLoading && children}
    </UserContext.Provider>
  );
};
