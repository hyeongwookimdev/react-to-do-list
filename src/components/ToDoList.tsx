import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "./atoms";
import Category from "./Category";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import img from "../bg.png";

const Container = styled.div`
  background-image: url(${img});
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 40px;
  border: 11px solid black;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin-bottom: 12px;

  h1 {
    text-align: center;
    width: 55%;
    background-color: #000;
    padding: 10px 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  div {
    width: 22.5%;
    text-align: center;
  }
`;

const AppList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: 75px;
  grid-auto-rows: 75px;
  gap: 10px;
`;

const CreateInputs = styled.div`
  width: 94%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  align-items: center;
  position: absolute;
  bottom: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  button {
    border: none;
    border-radius: 5px;
    height: 25px;
  }
  input {
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    height: 25px;
    width: 270px;
  }
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <Container>
      <Header>
        <div>
          <Category />
        </div>

        <h1>To Do List</h1>
        <div>12:34</div>
      </Header>
      <AppList>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </AppList>
      <CreateInputs>
        <CreateToDo />
        <CreateCategory />
      </CreateInputs>
    </Container>
  );
}

export default ToDoList;
