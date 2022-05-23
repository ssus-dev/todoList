import React ,{useState, useRef, useCallback}from "react";
import TodoTemplate from "./component/TodoTemplate.js";
import TodoInsert from "./component/TodoInsert.js";
import TodoList from "./component/TodoList.js";

// props로 전달해야 할 함수를 만들경우, useCallBack을 사용하여 함수를 감싸는 것을 습관화!
// onInsert 함수를 만든 뒤, 해당함수를 TodoInsert 컴포넌트의 props로 설정

const App = () => {
	const [todos,setTodos] = useState([
		{
			id : 1,
			text : "리액트의 기초 알아보기",
			checked : true,
		},
		{
			id : 2,
			text : "컴포넌트 스타일링해보기",
			checked : true,
		},
		{
			id : 3,
			text : "일정 관리 앱 만들어 보기",
			checked : false,
		},
	]);

	const nextId = useRef(4);
	
	const onInsert = useCallback(
		text => {
			const todo = {
				id : nextId.current,
				text,
				checked : false,
			};
			setTodos(todos.concat(todo));
			nextId.current += 1; //nextId 1씩 증가
		},
		[todos],
	);

	const onRemove = useCallback(
		id => {
			setTodos(todos.filter(todo => todo.id !== id));
		},
		[todos],
	);

	const onToggle = useCallback(
		id => {
			setTodos(
				// 불변성을 유지하면서 특정 배열 원소를 업데이트해야할 경우, map을 사용하면 짧은 코드로 손쉽게 구현 가능
				// map 왜 사용? 
				// - map 함수는 배열을 전체적으로 새로운 형태로 변환하여 새로운 배열로 생성할 때 사용, but 지금은 딱 하나의 원소만 수정하는데 왜 사용하는가.
				// onToggle함수 내 todo.id === id ? - : - 이 부분 ::: map을 사용하여 만든 배열에서 변화가 필요한 원소만 업데이트한다.
				todos.map(todo => 
					todo.id === id ? {...todo, checked : !todo.checked} : todo
				),
			);
		},
		[todos],
	);

  return (
    <TodoTemplate>
		<TodoInsert onInsert={onInsert}/>
		<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
