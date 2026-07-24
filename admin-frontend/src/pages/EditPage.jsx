import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import api from "../utils/api";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
  });

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await api.get(`/pages/${id}`);

        setFormData({
          title: response.data.data.title,
          slug: response.data.data.slug,
          content: response.data.data.content || "",
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchPage();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/pages/${id}`, {
        ...formData,
        blocks: [],
      });

      alert("Page Updated Successfully");
      navigate("/pages");
    } catch (error) {
      console.error(error);
      alert("Failed to update page");
    }
  };

  return (
    <AdminLayout>
      <h1 className="mb-6 text-3xl font-bold">Edit Page</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded bg-white p-6 shadow"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Page Title"
          className="w-full rounded border p-3"
        />

        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="Slug"
          className="w-full rounded border p-3"
        />

        <div>
  <label className="mb-2 block font-semibold">
    Content
  </label>

  <textarea
    name="content"
    value={formData.content}
    onChange={handleChange}
    rows="12"
    placeholder="Write your content here..."
    className="w-full rounded border p-3"
  />
</div>

        <button
          type="submit"
          className="rounded bg-green-600 px-6 py-3 text-white"
        >
          Update Page
        </button>
      </form>
    </AdminLayout>
  );
};

export default EditPage;