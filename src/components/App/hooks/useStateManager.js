import {useState} from 'react';

export const useStateManager = () => {
  const [selectedClassIndeces, setSelectedClassIndeces] = useState([]);
  const toggleClassSelection = toggleIdx => {
    const newSelectedClassIndeces = selectedClassIndeces.includes(toggleIdx)
      ? selectedClassIndeces.filter(idx => idx !== toggleIdx)
      : [...selectedClassIndeces, toggleIdx];
    setSelectedClassIndeces(newSelectedClassIndeces);
  }

  return {selectedClassIndeces, toggleClassSelection};
}