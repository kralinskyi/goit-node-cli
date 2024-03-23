import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/users/:userId" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;