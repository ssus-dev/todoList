import React from "react";
import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";


const TodoListItem_memo = ({ todo, onRemove , onToggle }) => {
	const { id, text, checked } = todo;
	return (
		<div className="TodoListItem">
			<div className={cn("checkBox", { checked })} onClick={() => onToggle(id)}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<div className="text">{text}</div>
				<div className="remove" onClick={() => onRemove(id)}>
					<MdRemoveCircleOutline />
				</div>
			</div>
		</div>
	);
};

// TodoListItem 컴포넌트는 todo, onRemove, onToggle이 바뀌지 않으면 리렌더링 하지않음
export default React.memo(TodoListItem_memo);
