import { createSlice } from "@reduxjs/toolkit";
import tuits from "../data/tuits.json";

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa.png",
};
const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};
const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  reducers: {
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },
    updatecou(state, action) {
      const index = state.findIndex(tuit => tuit._id === action.payload);
      
      if (state[index].liked){
          state[index].likes -= 1;
          state[index].liked = false;
      } else {
          state[index].likes += 1;
          state[index].liked = true;
      }
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
  },
});
export const { createTuit,deleteTuit,updatecou } = tuitsSlice.actions;
export default tuitsSlice.reducer;
