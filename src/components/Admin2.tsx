// src/components/Admin2.tsx

import React, { useState } from 'react';
import { useNamesContext } from './NamesContext';

const Admin2: React.FC = () => {
  const { names, addName, deleteName } = useNamesContext();
  const [newName, setNewName] = useState('');

  const handleAddName = () => {
    if (newName.trim()) {
      addName(newName);
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleAddName}>Add Name</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name} <button onClick={() => deleteName(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin2;
