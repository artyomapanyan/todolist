
import Bye from "./Bye";

function TodoText ({todos}) {
   
    return (
        <div>
            {
                todos.map((todo) => {
                return(
                    <Bye key={todo.id}
                         todo={todo} />
                )
                })
            }
           
        </div>
    );
}

export default TodoText;