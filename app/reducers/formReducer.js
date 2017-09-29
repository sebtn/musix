export default (state='', action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
    return [
      console.log(action.searchText)
      // ...action.payload.data
    ]
    default:
      return state
  }
}