import { deleteUser } from "../../redux/users/operations";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function DeleteModal({ onClose, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    await dispatch(deleteUser(id));
    navigate("/users");
  };
  return (
    <div>
      <p>Are you sure you want to delete this user?</p>
      <ul>
        <li>
          <button onClick={onClose}>No</button>
        </li>
        <li>
          <button onClick={handleClick}>Yes</button>
        </li>
      </ul>
    </div>
  );
}
