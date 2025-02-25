import { collection, deleteDoc, doc, getDocs, limit, orderBy, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import authState from '../../recoil/atoms/authAtom';
import { useRecoilValue } from 'recoil';
import { useCallback, useEffect, useState } from 'react';

export default function TodoList({ isRefreshTrigger, setIsRefreshTrigger }) {
  const userInfo = useRecoilValue(authState);
  const [todoList, setTodoList] = useState([]);
  const [searchTodo, setSearchTodo] = useState('');
  const [isEditInputMode, setIsEditInputMode] = useState(false);
  const [selectTodoData, setSelectTodoData] = useState();
  const [selectTodoId, setSelectTodoId] = useState();

  // 검색 관련 로직
  const filterTodoList = todoList.filter(todoList =>
    todoList.todoValue.toLowerCase().includes(searchTodo.toLowerCase())
  );

  const onSearchInputChange = event => {
    setSearchTodo(event.target.value);
  };

  // 수정 관련 로직
  const onEditClick = todo => {
    const id = todo.id;
    setIsEditInputMode(prev => !prev);
    setSelectTodoId(id);
    setSelectTodoData(todo);
  };

  const handleEditInputChange = event => {
    const value = event.target.value;
    setSelectTodoData(prev => ({
      ...prev,
      todoValue: value,
    }));
  };

  const onEditSubmit = async (todo, event) => {
    event.preventDefault();
    if (selectTodoData.todoValue === todo.todoValue) {
      alert('수정된 내용이 없습니다');
      return;
    }
    try {
      const todoDocRef = doc(db, 'todos', selectTodoId);
      console.log(selectTodoData);
      await updateDoc(todoDocRef, selectTodoData);
      setIsRefreshTrigger(prev => !prev);
      setIsEditInputMode(false);
      alert('수정되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  const onFavoriteClick = async todo => {
    try {
      const id = todo.id;
      const todoDocRef = doc(db, 'todos', id);
      const favoriteType = !todo.favorite;
      const newData = {
        ...todo,
        favorite: favoriteType,
      };
      await updateDoc(todoDocRef, newData);
      setIsRefreshTrigger(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  // 삭제 관련 로직
  const onDeleteClick = async todo => {
    try {
      const id = todo.id;
      await deleteDoc(doc(db, 'todos', id));
      setIsRefreshTrigger(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  // 데이터 패칭 관련 로직
  const fetchTodoData = useCallback(async () => {
    try {
      const q = query(
        collection(db, 'todos'),
        orderBy('favorite', 'desc'),
        orderBy('createdAt', 'desc'),
        limit(100),
        where('userId', '==', userInfo.uid)
      );
      const querySnapshot = await getDocs(q);
      const todos = [];
      querySnapshot.forEach(doc => {
        todos.push({ id: doc.id, ...doc.data() });
      });
      console.log(todos);
      setTodoList(todos);
    } catch (error) {
      console.log(error);
    }
  }, [userInfo.uid]);

  useEffect(() => {
    fetchTodoData();
  }, [fetchTodoData, isRefreshTrigger]);

  return (
    <article>
      <h3>투두 리스트</h3>
      <input name="search" placeholder="검색" value={searchTodo} onChange={onSearchInputChange} />
      <ul>
        {todoList &&
          filterTodoList.map(todo => (
            <li key={todo.id}>
              {isEditInputMode && todo.id === selectTodoId ? (
                <>
                  <form>
                    <input
                      type="text"
                      name="editTodoInput"
                      value={selectTodoData.todoValue}
                      onChange={event => handleEditInputChange(event)}
                    />
                    <button onClick={event => onEditSubmit(todo, event)}>수정완료</button>
                  </form>
                </>
              ) : (
                <p>{todo.todoValue}</p>
              )}
              <button onClick={() => onFavoriteClick(todo)}>{`${todo.favorite}`}별모양아이콘</button>
              <button onClick={() => onEditClick(todo)}>수정아이콘</button>
              <button onClick={() => onDeleteClick(todo)}>삭제</button>
            </li>
          ))}
      </ul>
    </article>
  );
}
