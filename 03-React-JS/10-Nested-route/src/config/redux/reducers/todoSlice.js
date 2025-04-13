import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todo: [
            {
                title: 'first Todo',
                id: nanoid()
            }
        ]
    },
    reducers: {
        addTodo: (state , action)=>{
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        deleteTodo: (state , action)=>{
            state.todo.splice(action.payload.index , 1)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions 
export default todoSlice.reducer