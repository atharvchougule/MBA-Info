// src/context/NamesContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NamesContextType {
  names: string[];
  addName: (name: string) => void;
  deleteName: (index: number) => void;
}


const NamesContext = createContext<NamesContextType | undefined>(undefined);

export const useNamesContext = () => {
  const context = useContext(NamesContext);
  if (!context) {
    throw new Error('useNamesContext must be used within a NamesProvider');
  }
  return context;
};

interface NamesProviderProps {
  children: ReactNode;
}

export const NamesProvider: React.FC<NamesProviderProps> = ({ children }) => {
  const [names, setNames] = useState<string[]>(() => {
    const storedNames = localStorage.getItem('names');
    return storedNames ? JSON.parse(storedNames) : ['abc', 'efg', 'xyz']; // Default initial values if localStorage is empty
  });

  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  const addName = (name: string) => {
    setNames([...names, name]);
  };

  const deleteName = (index: number) => {
    setNames(names.filter((_, i) => i !== index));
  };

  return (
    <NamesContext.Provider value={{ names, addName, deleteName }}>
      {children}
    </NamesContext.Provider>
  );
};
