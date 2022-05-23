import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

//props로 받아 온 todos 배열을 배열 내장 함수 map을 통해 TodoListItem으로 이루어진 배열로 변환하려 랜더링
// map을 사용하여 컴포넌트로 변환할 경우, key props를 전달해 주어야 한다
// 여기서 사용되는 ket값은 각 항목마다 가지고 있는 고윳값인 id를 넣어주어야한다
// todo데이터는 통째로 props로 전달해야함 (여러 종류의 값을 전달해야할 때에는 객체를 통째로 전달하는데 성능 최적화 할 때 편리)

const TodoList = ({todos , onRemove , onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
};

export default TodoList;