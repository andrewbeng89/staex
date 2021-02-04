var stateUtil = (function (reactive) {
  return function (state) {
    return reactive(state);
  };
});var actionsUtil = (function (_ref) {
  var actions = _ref.actions,
      initialState = _ref.initialState;
  return function (actionName, actionPayload) {
    var _actions$actionName;

    (_actions$actionName = actions[actionName]) === null || _actions$actionName === void 0 ? void 0 : _actions$actionName.call(actions, initialState, actionPayload);
  };
});var storeUtil = (function (_ref) {
  var reactive = _ref.reactive,
      readonly = _ref.readonly;
  return function (_ref2) {
    var state = _ref2.state,
        actions = _ref2.actions;
    var initialState = stateUtil(reactive)(state);
    var dispatch = actionsUtil({
      actions: actions,
      initialState: initialState
    });
    return {
      state: readonly(initialState),
      dispatch: dispatch
    };
  };
});var useState = stateUtil;
var useActions = actionsUtil;
var createStore = storeUtil;export{createStore,useActions,useState};