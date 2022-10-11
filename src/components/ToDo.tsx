import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "./atoms";

const Container = styled.div`
  color: #2f3640;
  background-color: #dcdde1;
  border-radius: 15px;
  padding: 3px;
  padding-top: 10px;
  li {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  button {
    font-size: xx-small;
    background-color: RGBA(0, 0, 0, 0);
    border: none;
    border-radius: 50%;
  }
`;

const AppHeader = styled.div`
  text-align: center;
  font-size: small;
  font-weight: 600;
`;

const Btns = styled.div`
  display: flex;
  justify-content: center;
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const deleteTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    const deleteToDo = event.currentTarget.parentElement;
    const deleteToDoId = deleteToDo?.parentElement?.id;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex(
        (toDo) => String(toDo.id) === deleteToDoId
      );

      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <Container>
      <li id={`${id}`}>
        <AppHeader>
          <span>{text}</span>
        </AppHeader>
        <Btns>
          {category !== Categories.DONE && (
            <button name={Categories.DONE} onClick={onClick}>
              ✅
            </button>
          )}
          {category !== Categories.DOING && (
            <button name={Categories.DOING} onClick={onClick}>
              ➡️
            </button>
          )}
          <button onClick={deleteTodo}>❌</button>
        </Btns>
      </li>
    </Container>
  );
}

export default ToDo;

/*{category !== Categories.TO_DO && (
            <button name={Categories.TO_DO} onClick={onClick}>
              
            </button>
          )} */
