// Add code here
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: [
      { id: 1, note: 'State is the current data in the app' },
      { id: 2, note: 'View is the UI that displays the state' },
      { id: 3, note: 'Actions alter the state of the app' },
      { id: 4, note: 'Reducers should only make immutable updates' },
      { id: 5, note: 'Reducers should be pure functions' },
    ],
  };

  const options = {
    name: 'notes',
    initialState, // shorthand for `initialState: initialState,
    reducers: {},
  };
  
  const notesSlice = createSlice(options);
  
  export default notesSlice.reducer;