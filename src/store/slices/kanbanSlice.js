import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todo: [],
    inProgress: [],
    done: [],
};

export const kanbanSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter((item) => item.id !== action.payload);
        },

        addInProgress: (state, action) => {
            state.inProgress.push(action.payload);
        },
        removeInProgress: (state, action) => {
            state.inProgress = state.inProgress.filter((item) => item.id !== action.payload);
        },

        addDone: (state, action) => {
            state.done.push(action.payload);
        },
        removeDone: (state, action) => {
            state.done = state.done.filter((item) => item.id !== action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addDone, addInProgress, addTodo, removeDone, removeInProgress, removeTodo } = kanbanSlice.actions;

export default kanbanSlice.reducer;
