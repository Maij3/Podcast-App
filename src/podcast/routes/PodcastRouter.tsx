import { Route, Routes, Navigate } from "react-router-dom";
import { PodcastPage } from "../pages/PodcastPage";
export const PodcastRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PodcastPage/>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
