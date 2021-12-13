import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  students: [],
  loading: false
}

const getStudents = createAsyncThunk(
  'students/getStudents',
  async (thunkAPI) => {
    const res = await fetch('https://hp-api.herokuapp.com/api/characters/students')
      .then(
        (data) => data.json()
      )
    return res
  })

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudents.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getStudents.fulfilled, (state, { payload }) => {
      state.loading = false
      state.students = payload
    })
    builder.addCase(getStudents.rejected, (state) => {
      state.loading = false
    })
  }
})

export const studentsReducer = studentsSlice.reducer
