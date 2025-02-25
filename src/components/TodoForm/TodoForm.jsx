import { useState } from 'react';
import { db } from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useRecoilValue } from 'recoil';
import authState from '../../recoil/atoms/authAtom';

export default function TodoForm({ setIsRefreshTrigger }) {
  const userInfo = useRecoilValue(authState);
  const [todoInput, setTodoInput] = useState({
    todoValue: '',
    favorite: false,
  });

  const handleInputChange = (field, event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setTodoInput(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmitClick = async event => {
    if (todoInput.todoValue === '') {
      alert('할 일을 작성해 주세요');
      return;
    }
    event.preventDefault();
    try {
      await addDoc(collection(db, 'todos'), {
        todoValue: todoInput.todoValue,
        favorite: todoInput.favorite,
        createdAt: Date.now(),
        username: userInfo.displayName,
        userId: userInfo.uid,
      });
      setTodoInput({ todoValue: '', favorite: false });
      setIsRefreshTrigger(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="todoForm">
      <input
        type="text"
        name="todo"
        placeholder="할 일을 작성해 주세요"
        value={todoInput.todoValue}
        onChange={event => handleInputChange('todoValue', event)}
      />
      <label>
        <input type="checkbox" name="favoritesCheckbox" onChange={event => handleInputChange('favorite', event)} />
        즐겨찾기에 등록하시겠습니까?
      </label>
      <button type="submit" onClick={onSubmitClick}>
        제출
      </button>
    </form>
  );
}
