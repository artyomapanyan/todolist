
import './App.css';

import TodoText from "./TodoText";
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const name = useSelector(function(state) {
    return state.currentUser.name;  
  });

  const dispatch = useDispatch();

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
    text: "JS",
    isComplated: false,
    },
    {
      id: Math.random(),
    text: "CSS",
    isComplated: false,
    },
    {
      id: Math.random(),
    text: "HTML",
    isComplated: false,
    },
  ]);
  return (

    
    <div className="App">
      
      <TodoText todos = {todos}/>
      
      <h1>{name}</h1>

      <input type="text" value={name}
      onChange={(e) => {
        dispatch({
          type: "edit-current-user-name",
          payload: {
            name: e.target.value
          }
        });
      }} />
    </div>
  );
}

export default App;
