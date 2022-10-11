import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  categoryState,
  Categories,
  toDoSelector,
  userCategoryState,
} from "./atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const userCategories = useRecoilValue(userCategoryState);
  const [category, setCategory] = useRecoilState(categoryState);
  console.log(toDos);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <CreateCategory />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        {userCategories?.map((userCategory) => (
          <option value={userCategory.text} key={userCategory.id}>
            {userCategory.text}
          </option>
        ))}
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
