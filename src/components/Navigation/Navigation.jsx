import { StyledNavLink } from "./Navigation.styled";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">Users</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
}
