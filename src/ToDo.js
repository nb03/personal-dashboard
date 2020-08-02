import React, {useState} from "react";

function ToDosComponent(){
    const [currentTodo, setCurrentTodo] = useState("");
    const [todos, setTodos] = useState([

    ]);

    function createNewTodo(currentTodo){
        let todosArray = [...todos];
        todosArray.push({
            todo: currentTodo,
            isCompleted: false
        });
        setTodos(todosArray);
    }

    function completeTodo(index){
        const todosArray = [...todos];
        todosArray[index].isCompleted = !todosArray[index].isCompleted;
        setTodos(todosArray);
    }

    function deleteTodo(index){
        let todosArray = [...todos];
        todosArray.splice(index, 1);
        setTodos(todosArray);
    }

    return(
        <div>
            <input 
            className="todo-input"
            value={currentTodo}
            onChange={e => {
                setCurrentTodo(e.target.value);
            }}
            onKeyPress={e => {
                if(e.key === "Enter") {
                    createNewTodo(currentTodo);
                    setCurrentTodo("");
                    }
                }}
                placeholder="What would you like to do?"
            
            />
            {todos.map((todo, index) => (
                <div key={todo} className="todo">
                  <div className="checkbox" onClick={() => completeTodo(index)}>
                    {todo.isCompleted && <span>&#x2714;</span>}
                  </div>
                  <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
                  <div className="delete" onClick={() => deleteTodo(index)}>
                      &#128465;
                </div>            
                </div>
            ))}
            {todos.length > 0 && `${todos.length} items`}
            </div>  
    );
}
export default ToDosComponent;