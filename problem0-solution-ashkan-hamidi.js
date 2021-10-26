const fridge = ["carrot","onion","cucamber","banana","avokado"]

function whereIsMyFood(fridge, item){

for(let i=0; i< fridge.length; i++){
  if(fridge[i] == item){
    return i
  
  }
} 
return -1
}
console.log(whereIsMyFood(fridge,"ddi"));

