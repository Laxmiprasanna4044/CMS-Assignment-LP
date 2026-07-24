import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import api from "../utils/api";

const CreatePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/pages", {
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
        blocks: [],
      });

      alert("Page Created Successfully");

      navigate("/pages");
    } catch (error) {
      console.error(error);
      alert("Failed to create page");
    }
  };

  return (
    <AdminLayout>
      <h1 className="mb-6 text-3xl font-bold">
        Create New Page
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded bg-white p-6 shadow"
      >
        <input
          type="text"
          name="title"
          placeholder="Page Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded border p-3"
        />

        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
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
          className="rounded bg-blue-600 px-6 py-3 text-white"
        >
          Create Page
        </button>
      </form>
    </AdminLayout>
  );
};

export default CreatePage;