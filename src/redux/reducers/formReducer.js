var initial_state = {
  'Warehouse': false,
  'Hospitality': false,
  'General Labor': false,
  'Office': false,
  'iRelaunch': false
}

export default (state = initial_state, action) => {
  switch(action.type){
    case 'EDIT_FORM':
      var new_state = state
      new_state[action.name] = action.bool
      return new_state
    default:
      return state
  }
}