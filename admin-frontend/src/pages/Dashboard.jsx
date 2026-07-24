import AdminLayout from "../layouts/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold">
        Welcome Admin 👋
      </h1>

      <p className="mt-4 text-gray-600">
        CMS Dashboard is working successfully.
      </p>
    </AdminLayout>
  );
};

export default Dashboard;