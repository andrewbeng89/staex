export default ({ actions, initialState }) =>
  (actionName, actionPayload) => {
    actions[actionName]?.(initialState, actionPayload);
  };
