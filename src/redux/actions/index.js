export const switchCategoryForm = (category,bool) => {
  return{
    type:'SWITCH_CATEGORY_FORM',
    category:category,
    bool:bool
  }
}