import React ,{useCallback, useRef, useState}from "react";
import TodoTemplate from "../component/TodoTemplate.js";
import TodoInsert from "../component/TodoInsert.js";
import TodoList from "../component/TodoList.js";

function createBulkTodos () {
	const array = [];
	for(let i=0; i<= 2500; i++){
		array.push({
			id : i,
			text : `할일${i}`,
			checked : false
		});
	}
	return array;
}

const App = () => {
	const [todos,setTodos] = useState(createBulkTodos);
	const nextId = useRef(4);
	const onInsert = useCallback(text => {
		const todo = {
			id : nextId.current,
			text,
			checked : false,
		};
		setTodos(todos => todos.concat(toso));
		nextId.current += 1;
	},[]);

  return (
    <TodoTemplate>
		<TodoInsert onInsert={onInsert}/>
		<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
