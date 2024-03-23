import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/users/operations";
import {
  selectCurrentUser,
  selectDeleting,
  selectLoading,
} from "../redux/users/selectors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteModal from "../components/DeleteModal/DeleteModal";

export default function UserDetails() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isDeleting = useSelector(selectDeleting);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    dispatch(getUserData(userId));
  }, [dispatch, userId]);
  const user = useSelector(selectCurrentUser);
  console.log(user);
  return (
    user && (
      <>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <div>
            <img src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address}</p>
            <button onClick={() => setIsOpen(true)}>
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        )}
        {isOpen && <DeleteModal onClose={closeModal} id={user.id} />}
      </>
    )
  );
}
