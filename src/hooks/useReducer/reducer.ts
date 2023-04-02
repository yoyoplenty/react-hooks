export const reducer = (state: any, action: any) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOOGLE":
      return { count: state.count, showText: !state.showText };
    case "INPUT-VALUE":
      return { count: action.value, showText: state.showText };
    default:
      return state;
  }
};
