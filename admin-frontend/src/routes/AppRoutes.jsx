import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Pages from "../pages/Pages";
import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
  path="/pages"
  element={
    <ProtectedRoute>
      <Pages />
    </ProtectedRoute>
  }
/>

<Route
  path="/create-page"
  element={
    <ProtectedRoute>
      <CreatePage />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit-page/:id"
  element={
    <ProtectedRoute>
      <EditPage />
    </ProtectedRoute>
  }
/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;