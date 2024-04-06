import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editUser, getUserData } from "../redux/users/operations";
import { useState, useEffect } from "react";
import { selectCurrentUser } from "../redux/users/selectors";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "front-end", label: "Front-End" },
  { value: "back-end", label: "Back-End" },
  { value: "full-stack", label: "Full-Stack" },
];

export default function EditUser() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserData(userId));
  }, [dispatch, userId]);

  const userToEdit = useSelector(selectCurrentUser);
  const [position, setPosition] = useState();
  const [editData, setEditData] = useState(userToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(editData));
    navigate(`/users/${editData.id}`);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  if (editData) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={editData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="text"
            value={editData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number
          <input
            name="phone"
            type="text"
            value={editData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Address
          <input
            name="address"
            type="text"
            value={editData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Avatar
          <input
            name="avatar"
            type="url"
            value={editData.avatar}
            onChange={handleChange}
          />
        </label>
        <Select
          name="position"
          options={options}
          defaultValue={{ value: editData.group, label: editData.group }}
          onChange={(option) => {
            setPosition(option.value);
          }}
        />
        <button>Edit User</button>
      </form>
    );
  }
}
