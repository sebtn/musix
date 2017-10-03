export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ARTIST":
    return [
      // console.log(action.request.data),
      // action.request
    ]
    default:
      return state
  }
}