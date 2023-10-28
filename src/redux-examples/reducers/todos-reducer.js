const initialTodos = [
    {
        _id:"234",
        do:"Reduce Space Complexity",
        done:false
    },
];
const todosSlice = createSlice({
    name:"todos",
    initialState:initialTodos,
});
export default todosSlice.reducer;