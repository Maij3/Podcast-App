import { Routes, Route } from "react-router-dom";
import { PodcastRouter } from "../podcast/routes/PodcastRouter";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PodcastRouter />} />
    </Routes>
  );
};
