import { PodcastLayout } from "../layout/PodcastLayout";
import { ItunesListView } from "../views/ItunesListView";

export const PodcastPage = () => {
  return (
    <PodcastLayout>
      <ItunesListView />
    </PodcastLayout>
  );
};
