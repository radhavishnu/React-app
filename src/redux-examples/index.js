import React from "react";
import HelloReduxExampleComponent from "./reducers/hello-redux-example-component";
import hello from "./reducers/hello";
import {createStore} from "redux";
import {Provider} from "react-redux";
const store = createStore(hello);
const ReduxExamples = () => {
    return(
        <Provider store={store}>
        <div>
        <h1>Redux Examples</h1>
        <HelloReduxExampleComponent/>
        
      </div>
        </Provider>
    )
}
export default ReduxExamples;