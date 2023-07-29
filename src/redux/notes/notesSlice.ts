import { createSlice } from "@reduxjs/toolkit";
import { NotesState } from "../../types/notes";
const initialState: NotesState = {
 notes: [
  {
   id: 1,
   creationTime: "2023-07-24 12:30",
   name: "Dentist Appointment",
   content:
    "I have a dentist appointment on 3/5/2023, I moved it from 5/5/2023",
   datesMentioned: "3/5/2023, 5/5/2023",
   category: "Task",
   archived: false,
  },
  {
   id: 2,
   creationTime: "2023-07-25 10:15",
   name: "Meeting with Team",
   content: "Discuss project progress and upcoming tasks",
   datesMentioned: "8/5/2023",
   category: "Task",
   archived: false,
  },
  {
   id: 3,
   creationTime: "2023-07-26 14:00",
   name: "Random Thought",
   content: "Remember to buy groceries",
   datesMentioned: "3/5/2023",
   category: "Random Thought",
   archived: false,
  },
  {
   id: 4,
   creationTime: "2023-07-27 09:30",
   name: "Idea",
   content: "Start a new project",
   datesMentioned: "10/5/2023, 15/5/2023",
   category: "Idea",
   archived: false,
  },
  {
   id: 5,
   creationTime: "2023-07-28 17:45",
   name: "Important Task",
   content: "Complete the report before the deadline",
   datesMentioned: "5/5/2023, 12/5/2023",
   category: "Task",
   archived: false,
  },
  {
   id: 6,
   creationTime: "2023-07-29 13:20",
   name: "Reminder",
   content: "Send birthday wishes to John",
   datesMentioned: "12/5/2023",
   category: "Task",
   archived: false,
  },
  {
   id: 7,
   creationTime: "2023-07-30 08:00",
   name: "Idea",
   content: "Learn a new programming language",
   datesMentioned: "17/5/2023",
   category: "Idea",
   archived: false,
  },
 ],
};

export const notesSlice = createSlice({
 name: "notes",
 initialState,
 reducers: {
  addNote: (state, action) => {
   state.notes.push(action.payload);
  },
  removeNote: (state, action) => {
   state.notes = state.notes.filter((note) => note.id !== action.payload);
  },
  archiveNote: (state, action) => {
   state.notes = state.notes.map((note) => {
    if (note.id === action.payload) {
     note.archived = true;
    }
    return note;
   });
  },
  unArchiveNote: (state, action) => {
   state.notes = state.notes.map((note) => {
    if (note.id === action.payload) {
     note.archived = false;
    }
    return note;
   });
  },
  editNote: (state, action) => {
   state.notes = state.notes.map((note) => {
    if (note.id === action.payload.id) {
     note.name = action.payload.name;
     note.content = action.payload.content;
     note.category = action.payload.category;
     note.datesMentioned = action.payload.datesMentioned;
    }
    return note;
   });
  },
 },
});

export const { addNote, removeNote, archiveNote, unArchiveNote, editNote } =
 notesSlice.actions;

export const notesReducer = notesSlice.reducer;
