import useState from "./useState";
import useActions from "./useActions";

export default ({ reactive, readonly }) => ({ state, actions }) => {
  const initialState = useState(reactive)(state);
  const dispatch = useActions({ actions, initialState });

  return {
    state: readonly(initialState),
    dispatch
  }
};
