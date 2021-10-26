
const fridge = {'tomato': 2, 'onion': 3, 'olives': 1};
const ingredients = {'tomato': 2, 'onion': 3};
function validateRecipeWithQuantity(fridge, ingredients){
 
  
  const keys1 = Object.keys(ingredients);

  for(let key of keys1){
    if(fridge[key] !== ingredients[key]){
      return false;
    }
     
  }
  return true;
}

console.log(validateRecipeWithQuantity(fridge, ingredients))

