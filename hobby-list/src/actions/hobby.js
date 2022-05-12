
/**
 * 
 * action creators:
 *  In component, we usually dispatch an object {type: , payload:}
 *  By import action creators addNewHobby(), we only pass params hobby, the function will return an object with type: 'ADD_HOBBY', payload: hobby 
 */

//action creators
export const addNewHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    payload: hobby,
  }
}

export const setActiveHobby = (hobby) => {
  return {
    type: 'SET_ACTIVE_HOBBY',
    payload: hobby,
  }
}