import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, userCategoryState } from "./atoms";

function Category() {
  const userCategories = useRecoilValue(userCategoryState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <select value={category} onInput={onInput}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>➡️</option>
      <option value={Categories.DONE}>✅</option>
      {userCategories?.map((userCategory) => (
        <option value={userCategory.text} key={userCategory.id}>
          {userCategory.text}
        </option>
      ))}
    </select>
  );
}

export default Category;
