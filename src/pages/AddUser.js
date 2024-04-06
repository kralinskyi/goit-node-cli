import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/users/operations";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
  } = useForm();
  const submitForm = async (data) => {
    const { id } = await dispatch(addUser(data)).unwrap();
    navigate(`/users/${id}`);
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label>
        Name
        <input {...register("name", { required: true })} type="text" />
      </label>
      <label>
        Email
        <input {...register("email", { required: true })} type="text" />
      </label>
      <label>
        Phone Number
        <input {...register("phone", { required: true })} type="text" />
      </label>
      <label>
        Address
        <input {...register("address")} type="text" />
      </label>
      <label>
        Avatar
        <input {...register("avatar")} type="url" />
      </label>
      <button>Add User</button>
    </form>
  );
}
