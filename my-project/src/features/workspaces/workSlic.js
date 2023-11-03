import {createSlice}from'@reduxjs/toolkit'

const initialState = {
    work:undefined
}


const WorkSlice = createSlice({
  name:'workspace',
  initialState,
  reducers:{
    workSpace:(state,action)=>{
      state.work = action.payload;
    }
  }

})


export const {workSpace} = WorkSlice.actions;
export default WorkSlice.reducer;