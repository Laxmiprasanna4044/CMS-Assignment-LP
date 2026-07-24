import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-64 bg-gray-800 p-6 text-white">
      <h2 className="mb-8 text-2xl font-bold">Dashboard</h2>

      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="block rounded p-2 hover:bg-gray-700"
        >
          Dashboard
        </Link>

        <Link
          to="/pages"
          className="block rounded p-2 hover:bg-gray-700"
        >
          Pages
        </Link>

        <Link
          to="/create-page"
          className="block rounded p-2 hover:bg-gray-700"
        >
          Create Page
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;