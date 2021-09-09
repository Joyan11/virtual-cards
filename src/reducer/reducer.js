/** @format */

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_VIEW":
      return {
        ...state,
        view: action.payload === "grid" ? "grid" : "list",
      };
    default:
      return state;
  }
};
