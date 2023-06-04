import { Route, Routes, Navigate } from "react-router-dom";
import { PodcastPage } from "../pages/PodcastPage";
import { PodcastByIdPage, PodcastDetailsPage } from "../pages";
export const PodcastRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PodcastPage />} />
      <Route path="/podcast/:id" element={<PodcastDetailsPage />} />
      <Route
        path="/podcast/:id/episode/:episodeId"
        element={<PodcastByIdPage />}
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
