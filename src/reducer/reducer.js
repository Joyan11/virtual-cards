/** @format */

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_DATA":
      return {
        ...state,
        allData: action.payload,
      };
    case "CHANGE_VIEW":
      return {
        ...state,
        view: action.payload === "grid" ? "grid" : "list",
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        cardType: [],
        cardHolder: "default",
      };
    case "ADD_CARD_TYPE":
      return {
        ...state,
        cardType: [...state.cardType, action.payload],
      };
    case "REMOVE_CARD_TYPE":
      return {
        ...state,
        cardType: state.cardType.filter((item) => item !== action.payload),
      };
    case "CARD_HOLDER":
      return {
        ...state,
        cardHolder: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        modal: state.modal ? false : true,
      };
    case "FILTERED_DATA":
      return {
        ...state,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};
