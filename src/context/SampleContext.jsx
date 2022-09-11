import { createContext, useContext, useState } from 'react';

const SampleContext = createContext(null);

export const useSampleContext = () => {
  const value = useContext(SampleContext);
  if (!value) throw new Error('NonConsumerError');
  return value;
};

export const SampleContextProvider = ({ children }) => {
  const [state, setState] = useState(false);
  return (
    <SampleContext.Provider value={{ state, setState }}>
      {children}
    </SampleContext.Provider>
  );
};
