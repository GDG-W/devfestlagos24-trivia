import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IUserState {
  hasStartedGame: boolean;  // when the user starts a game
  hasCanceledGame : boolean;  // when the game is canceled
}

const initialState: IUserState = {
  hasStartedGame: false,
  hasCanceledGame : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setGameStart: (state, { payload }) => {
      state.hasStartedGame = payload;
    },
    setHasCanceledGame: (state, { payload }) => {
      state.hasCanceledGame = payload;
    },
  },
});

export const { setGameStart, setHasCanceledGame } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
