import { reactive, readonly } from "@vue/reactivity";

import useState from "./useState";
import useActions from "./useActions";

export default ({ state, actions }) => {
  const initialState = useState(reactive)(state);
  const dispatch = useActions({ actions, initialState });

  return {
    state: readonly(initialState),
    dispatch
  }
};
