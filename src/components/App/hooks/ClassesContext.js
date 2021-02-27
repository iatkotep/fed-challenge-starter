import React, {createContext, useState} from 'react';
const ClassesContext = createContext(null);

export const ClassesProvider = ({children}) => {
  const [selectedClassIndeces, setSelectedClassIndeces] = useState([]);
  const toggleClassSelection = toggleIdx => {
    const newSelectedClassIndeces = selectedClassIndeces.includes(toggleIdx)
    ? selectedClassIndeces.filter(idx => idx !== toggleIdx)
    : [...selectedClassIndeces, toggleIdx];
    setSelectedClassIndeces(newSelectedClassIndeces);
  }

  const value = {
    selectedClassIndeces,
    toggleClassSelection
  };

  return (
  <ClassesContext.Provider {...{value}}>
    {children}
  </ClassesContext.Provider>
  );
}

export default ClassesContext;