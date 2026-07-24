import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between bg-blue-600 px-6 py-4 text-white shadow">
      <h1 className="text-2xl font-bold">CMS Admin</h1>

      <button
        onClick={handleLogout}
        className="rounded bg-red-500 px-4 py-2 hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;