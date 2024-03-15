import { createContext, useContext, useReducer } from 'react';
import formReducer, { initialState } from '../reducer/formReducer';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};