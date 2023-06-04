import { useEffect } from "react";
import useActions from "./hooks/useActions";
import { AppRouter } from "./router/AppRouter";
import { useGetPodcastQuery } from "./store/apis";
import { AppTheme } from "./theme";

export const PodcastApp = () => {
  const { setPodcast } = useActions();
  const { data, isSuccess } = useGetPodcastQuery(100)

  useEffect(() => {
    if (isSuccess) {
      setPodcast(data);
    }
  }, [data, isSuccess]);
  
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
