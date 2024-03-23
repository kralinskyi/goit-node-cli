import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/operations";
import { selectUsers, selectLoading } from "../redux/users/selectors";
import { Link } from "react-router-dom";

export default function UserPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const isLoading = useSelector(selectLoading);
  const users = useSelector(selectUsers);
  console.log(users);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
