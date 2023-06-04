import { Podcast } from "../store/apis/interface";
export const filterPodcastById = (
  podcastById: any[],
  episodeId: string | Podcast | null | undefined
) => {
  const filter: string[] = [];
  if (Array.isArray(podcastById)) {
    podcastById.filter((item: any) => {
      const trackId = item.trackId;
      if (trackId.toString() === episodeId?.toString()) {
        filter.push(item);
      }
    });
  } else {
    console.log("podcastById no es un arreglo");
  }

  return filter;
};
