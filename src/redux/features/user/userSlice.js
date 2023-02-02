import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
    updateWorkout: (state, action) => {
      const index = state.value.workout.findIndex(
        (workout) => workout.day === action.payload
      );
      const newWeeksWorkouts = [...state.value.workout];
      newWeeksWorkouts[index].complete = !newWeeksWorkouts[index].complete;
      state.value = { ...state.value, workout: newWeeksWorkouts };
    },
  },
});

export const { login, logout, updateWorkout } = userSlice.actions;

export default userSlice.reducer;
