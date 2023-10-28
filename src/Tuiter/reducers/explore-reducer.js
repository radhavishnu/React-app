import { createSlice } from "@reduxjs/toolkit";
import exploreTuits from '../data/posts.json';

const exploreContentSlice = createSlice({
    name: 'home',
    initialState: exploreTuits
});

export default exploreContentSlice.reducer;