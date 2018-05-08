const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');
const Dish = require('../models/dish');

const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients =[
  {
    name : "cheese", 
    description : "good",
    image : "http://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2015/08/cheese.jpg"
  }, 
  {
    name : "bacon", 
    description : "very good",
    image : "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/11/3/0/AZ0102H_brown-sugar-bacon-2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1478188856589.jpeg"
  }, 
  {
    name : "salt", 
    description : "gooooood",
    image : "https://media.cdnws.com/_i/48378/4183/3869/84/fleur-de-sel-de-l-ile-de-re-detail.jpeg"
  }

]
Ingredient.create(ingredients, (err)=>{
  if (err){ throw(err)}
  console.log(`Created ${ingredients.length} dishes`)
});
