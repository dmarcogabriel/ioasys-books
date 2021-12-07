import {ErrorContext} from '../contexts';
import {useContext} from 'react';

export const useErrorHandler = () => useContext(ErrorContext);
