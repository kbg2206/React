import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id : nanoid(),
    text : "Hello World"
  }],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState : initialState,
    reducers : {
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text : action.payload.text,
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id!== action.payload.id);
        },
        updateTodo : (state,action)=>{
            const updatedTodo = state.todos.find((todo) => todo.id === action.payload.id);
            if(updatedTodo){
                updatedTodo.text = action.payload.text;
            }
        }
    },

})

export const {addTodo, removeTodo , updateTodo} = todoSlice.actions;

export default todoSlice.reducer;