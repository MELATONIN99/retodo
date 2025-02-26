import styled from 'styled-components';

export const TodoListLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;

export const SearchInput = styled.input`
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgColor200};
  width: 100%;
  height: 4rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.bgColor200};
  border-radius: 1rem;

  &:focus {
    outline: 2px solid;
    outline-color: ${({ theme }) => theme.masterColor};
  }
`;

export const ItemList = styled.ul`
  margin-top: 1rem;
  border-radius: 1rem;
  width: 100%;
  height: 40rem;
`;

export const TodoItem = styled.li`
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.bgColor300};
`;

export const TodoListForm = styled.form`
  display: flex;
  align-items: center;
`;

export const TodoEditInput = styled.input`
  outline: none;
  height: 3rem;
  font-size: 2rem;
  border-radius: 1rem;
  width: 80%;
`;

export const TodoValueParagraph = styled.p`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const IconButton = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
`;
