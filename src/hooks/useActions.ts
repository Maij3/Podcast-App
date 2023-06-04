import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { podcastSlice } from "../store/apis/podcastSlice";

const AllAtions = {
  ...podcastSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllAtions, dispatch);
};

export default useActions;
