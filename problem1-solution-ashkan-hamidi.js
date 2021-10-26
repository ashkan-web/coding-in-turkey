const fridge = ['tomato', 'banana', 'apple', 'onion', 'cucumber'];
const ingredients = ['tomato', 'onion', 'lettuce'];
let count = 0;

function whereIsMyFood(fridge, item){

for(let i=0; i< fridge.length; i++){ for(let j=0; j< ingredients.length; j++){

  if(ingredients[j] == fridge[i]){
    count +=1
  }
}}
if(count == ingredients.length){
  return true 
}
return false
}
console.log(whereIsMyFood(fridge, ingredients));