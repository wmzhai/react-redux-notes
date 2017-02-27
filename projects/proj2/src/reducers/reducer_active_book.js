
// State argument is not application state, only the
// state this reducer is responsible for 
export default function(state = null, action) {
  // DO NOT mutate the state ,
  // return a fresh object
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}