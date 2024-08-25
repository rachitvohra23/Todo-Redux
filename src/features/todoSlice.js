import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoItems: [],
};

const todoSlice = createSlice({
  name: 'taskManager',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todoItems = state.todoItems.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTodo: (state, action) => {
      const todo = state.todoItems.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todoItems.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    clearTodos: (state) => {
      state.todoItems = [];
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo, clearTodos } = todoSlice.actions;

export default todoSlice.reducer;
