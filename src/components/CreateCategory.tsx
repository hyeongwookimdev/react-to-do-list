import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState, userCategoryState } from "./atoms";

interface IForm {
  userCategory: string;
}

function CreateCategory() {
  const [userCategories, setUserCategories] = useRecoilState(userCategoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ userCategory }: IForm) => {
    setUserCategories((oldUserCategories) => [
      { text: userCategory, id: Date.now() },
      ...oldUserCategories,
    ]);
    setValue("userCategory", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("userCategory", { required: "Plaese Write a Category" })}
        placeholder="Write a Category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
