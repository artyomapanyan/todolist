
function Bye ({todo}) {
   
    return (
        <div>
            <label>
               <input type="checkbox" />
               {todo.text}
               <button>X</button>

            </label>
           
        </div>
    );
}

export default Bye;