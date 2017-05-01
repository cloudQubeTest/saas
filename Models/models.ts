var mongoose = require('mongoose');


var recipeSchema= new mongoose.Schema({
    recipeTitle: String,
    ingredients: String,
    instructions: String,
    calories: Number,
    protein: Number,
    fat: Number,
    carbs: Number,
    sugar: Number

})

var Recipe= mongoose.model('Recipe', recipeSchema);