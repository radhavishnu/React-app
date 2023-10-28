import {Link}  from "react-router-dom"
function Navigation(){
    return(
    <div>            
    <Link to="/">Exercises</Link> |
    <Link to="/">Exercises5</Link> |
    <Link to="/e6">Exercises6</Link> |
    <Link to="/Tuiter">Tuiter</Link> |
    <Link to="/hello-world">hello</Link> |
    </div>
    )
}
export default Navigation