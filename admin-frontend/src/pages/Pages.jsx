import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import api from "../utils/api";

const Pages = () => {
  const [pages, setPages] = useState([]);

  const fetchPages = async () => {
    try {
      const response = await api.get("/pages");
      setPages(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/pages/${id}`);
      alert("Page Deleted Successfully");
      fetchPages();
    } catch (error) {
      console.error(error);
      alert("Failed to delete page");
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Pages</h1>

        <Link
          to="/create-page"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          + Create Page
        </Link>
      </div>

      <div className="rounded-lg bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Slug</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pages.map((page) => (
              <tr key={page._id} className="border-t">
                <td className="p-3">{page.title}</td>
                <td className="p-3">{page.slug}</td>

                <td className="p-3 space-x-2">
                  <Link
                    to={`/edit-page/${page._id}`}
                    className="rounded bg-yellow-500 px-3 py-1 text-white"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(page._id)}
                    className="rounded bg-red-600 px-3 py-1 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Pages;