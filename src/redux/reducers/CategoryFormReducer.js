var initial_state = {
  warehouse:false,
  hospitality:false,
  general_labor:false,
  office:false,
  iRelaunch:false
}

export default (state = initial_state, action) => {
  switch(action.type){
    case 'SWITCH_CATEGORY_FORM':
      var new_state = initial_state
      new_state[action.category] = !new_state[action.category]
      return new_state
    default:
      return state
  }
}