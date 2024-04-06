// import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/users/operations";
import { useNavigate } from "react-router-dom";

// export default function AddUser() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     // watch,
//   } = useForm();
//   const submitForm = async (data) => {
// const { id } = await dispatch(addUser(data)).unwrap();
// navigate(`/users/${id}`);
//   };
//   return (
//     <form onSubmit={handleSubmit(submitForm)}>
//       <label>
//         Name
//         <input {...register("name", { required: true })} type="text" />
//       </label>
//       <label>
//         Email
//         <input {...register("email", { required: true })} type="text" />
//       </label>
//       <label>
//         Phone Number
//         <input {...register("phone", { required: true })} type="text" />
//       </label>
//       <label>
//         Address
//         <input {...register("address")} type="text" />
//       </label>
//       <label>
//         Avatar
//         <input {...register("avatar")} type="url" />
//       </label>
//       <button>Add User</button>
//     </form>
//   );
// }

import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "Front-End", label: "Front-End" },
  { value: "Back-End", label: "Back-End" },
  { value: "Full-Stack", label: "Full-Stack" },
];

export default function AddUser() {
  const [position, setPosition] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = await dispatch(
      addUser({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        phone: e.target.elements.phone.value,
        address: e.target.elements.address.value,
        avatar: e.target.elements.avatar.value,
        group: position,
      })
    ).unwrap();
    navigate(`/users/${id}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" />
      </label>
      <label>
        Email
        <input name="email" type="text" />
      </label>
      <label>
        Phone Number
        <input name="phone" type="text" />
      </label>
      <label>
        Address
        <input name="address" type="text" />
      </label>
      <label>
        Avatar
        <input name="avatar" type="url" />
      </label>
      <Select
        name="position"
        options={options}
        onChange={(option) => {
          setPosition(option.value);
        }}
      />
      <button>Add User</button>
    </form>
  );
}
