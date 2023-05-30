import { Route, Routes, Navigate } from "react-router-dom";
export const PodcastRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Podcast Page</h1>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
