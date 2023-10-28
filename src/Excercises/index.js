// import Classes from "../Classes"
// import Exercises5 from "./e5"
// import ConditionalOutputIfElse from "./e5/conditional-output/conditional-output-if-else"
// import ConditionalOutputInline from "./e5/conditional-output/conditional-output-inline"
// import TodoItem from "./e5/todo/todo-item"
// import TodoList from "./e5/todo/todo-list"
// import Exercises6 from "./e6"
// function Exercises(){
//     return(
//         <div>
//             <Exercises5/>
//             <Exercises6/>
//             <Classes/>
//             {/* <ConditionalOutputIfElse/>
//             <ConditionalOutputInline/> */}
//             <TodoList/>
//         </div>
//     )
// }
// export default Exercises
import Navigation from "../Navigation";
import Exercises5 from "./e5";
import Exercises6 from "./e6";
import {Routes, Route} from "react-router";
function Exercises(){
    return(
        <div>
            <Navigation/>
            <Routes>
                <Route path="/e5" element={<Exercises5/>}/>
                <Route index element={<Exercises6/>}/>
            </Routes>
        </div>
    )
};
export default Exercises;