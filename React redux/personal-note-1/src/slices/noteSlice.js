import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    notes: [],
    notesRecorded:0
};


const noteSlice = createSlice({
    name: "Notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notesRecorded += 1;
            state.notes = [...state.notes, {id:state.notesRecorded, value:action.payload, crossed:false}];
        },
        crossNote: (state, action) => {
            state.notes.forEach(note => {
                if (note.id == action.payload) {
                    note.crossed = !note.crossed;
                }
            }); 
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id != action.payload);
        }
    }
});

export const { addNote, crossNote, deleteNote } = noteSlice.actions;

export const selectNote = (state) => state.notes;
export default noteSlice.reducer;