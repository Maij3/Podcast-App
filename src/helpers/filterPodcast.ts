import { Podcast } from "../store/apis/interface";

export const filterPodcast = (podcast: any[] , search: string | Podcast | null) => {
  const filter: string[] = [];
  podcast.filter((item: any) => {
    const name = item["im:name"].label.toLowerCase();
    if (name.includes(search)) {
        filter.push(item)
    }
  });
  return filter
};
