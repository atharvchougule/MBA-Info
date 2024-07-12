// src/components/Index.tsx

import React from 'react';
import { useNamesContext } from './NamesContext';

const Admin: React.FC = () => {
  const { names } = useNamesContext();

  return (
    <div>
      <h2>Name List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
