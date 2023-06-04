import { Route, Routes, Navigate } from "react-router-dom";
import { PodcastPage } from "../pages/PodcastPage";
import { PodcastDetailsPage } from "../pages";
export const PodcastRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PodcastPage/>} />
      <Route path="/podcast/:id" element={<PodcastDetailsPage/>}/>
      <Route path="/podcast/:id/episode/:episodeId" element={<h1>Episodios</h1>}/>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
