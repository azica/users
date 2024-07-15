import { Route, Routes } from "react-router-dom";

import UserPage from "pages/UserPage";
import UsersPage from "pages/UsersPage";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/:id" element={<UserPage />} />
    </Routes>
  );
};
