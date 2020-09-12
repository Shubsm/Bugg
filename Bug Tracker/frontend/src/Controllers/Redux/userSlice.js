import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({

    name:"user",
    initialState:({}),
    reducers:{
        getUser:(state)=>{
            state.push({name:"Shubham Mittal"})
            state.push({name:"Shubh"}) 
    }
    }
})

export default slice.reducer;
export const{getUser}= slice.actions;