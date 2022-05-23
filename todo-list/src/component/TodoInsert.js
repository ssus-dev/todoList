import React , {useState , useCallback} from "react";
import './TodoInsert.scss';
import {MdAddTask} from 'react-icons/md';

// TodoInsert 컴포넌트에서 input에 입력하는 값을 관리할 수 있도록 useState를 사용하여 value라는 상태 정의
// 추가로 input에 넣어줄 onChange 함수 작성 => 컴포넌트가 리랜더링될 때마다 함수 새로 만들지 않고, 재사용 함 (useCallback Hook)
const TodoInsert = ({onInsert}) => {
    const [value , setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
            onInsert(value);
            setValue(''); // value 값 초기화

            //submit 이벤트는 브라우저에서 새로고침 발생 => 이를 방지하기 위해 이 함수 호출 (onSubmit을 사용하는 이유는 input에서 enter키 적용됨)
            e.preventDefault();
        },
        [onInsert , value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
            <button type="submit"><MdAddTask/></button>
        </form>
    );
};

export default TodoInsert;