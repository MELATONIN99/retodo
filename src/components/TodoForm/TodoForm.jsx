import { useState } from 'react';
import { db } from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useRecoilValue } from 'recoil';
import authState from '../../recoil/atoms/authAtom';
import * as S from './TodoFormStyle';
import { toast } from 'react-toastify';

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
    event.preventDefault();
    if (todoInput.todoValue === '') {
      toast.warn('할 일을 작성해 주세요');
      return;
    }
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
    <S.Form id="todoForm">
      <S.TodoInput
        type="text"
        name="todo"
        placeholder="작업 추가"
        value={todoInput.todoValue}
        onChange={event => handleInputChange('todoValue', event)}
      />
      <S.ControlBox>
        <S.FavoriteLabel>
          <S.FavoriteInput
            type="checkbox"
            name="favoriteCheckbox"
            onChange={event => handleInputChange('favorite', event)}
          />
          즐겨찾기
        </S.FavoriteLabel>
        <S.SubmitButton type="submit" onClick={onSubmitClick}>
          추가
        </S.SubmitButton>
      </S.ControlBox>
    </S.Form>
  );
}
