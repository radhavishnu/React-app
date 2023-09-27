import Classes from "../Classes"
import Exercises5 from "./e5"
import ConditionalOutputIfElse from "./e5/conditional-output/conditional-output-if-else"
import ConditionalOutputInline from "./e5/conditional-output/conditional-output-inline"
import TodoItem from "./e5/todo/todo-item"
import TodoList from "./e5/todo/todo-list"
import Exercises6 from "./e6"
function Exercises(){
    return(
        <div>
            <Exercises5/>
            <Exercises6/>
            <Classes/>
            {/* <ConditionalOutputIfElse/>
            <ConditionalOutputInline/> */}
            <TodoList/>
        </div>
    )
}
export default Exercises