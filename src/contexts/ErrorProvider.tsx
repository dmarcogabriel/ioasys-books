import React, {createContext} from 'react';
import {UNAUTHORIZED_STATUS} from '../constants';
import Toast from 'react-native-toast-message';

type ErrorData = {
  message: string;
};

export interface ApiError {
  errors: ErrorData;
}

interface ErrorContextValue {
  handleError: (
    error: ApiError,
    status: number,
    logoutCallback: () => Promise<void>,
  ) => Promise<void>;
}

export const ErrorContext = createContext<ErrorContextValue>({
  handleError: async () => {},
});

interface ErrorProviderProps {
  children: React.ReactNode;
}

export const ErrorProvider = ({children}: ErrorProviderProps): JSX.Element => {
  const handleError = async (
    error: ApiError,
    status: number,
    logoutCallback: () => Promise<void>,
  ): Promise<void> => {
    let errorMessage: string = '';
    if (status === UNAUTHORIZED_STATUS) {
      await logoutCallback();
      errorMessage = 'Sessão expirada';
    } else {
      Toast.show({
        position: 'bottom',
        text1: errorMessage || error.errors.message,
        type: 'error',
      });
    }
  };

  return (
    <ErrorContext.Provider value={{handleError}}>
      {children}
    </ErrorContext.Provider>
  );
};
