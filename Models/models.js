var mongoose = require('mongoose');
//make sure connection to database is the same on your computer
mongoose.connect('mongodb://localhost/test');

var db= mongoose.connection;

db.on('error',function(err){
    console.log('connection error', err);
});
db.once('open', function(){
    console.log('connected.');
});

//recipe schema
//ingredients right now is a long string, may consider putting into an
//array of strings later
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

//convert Schema into model
var Recipe= mongoose.model('Recipe', recipeSchema);

//inserting and saving recipe into database
/*var matchaSmoothie= new Recipe({
    recipeTitle: 'Matcha Smoothie',
    ingredients: "1 banana, 1/2 cup of ice, 1 cup of almond milk, 1 scoop of vanilla protein powder, 2 tbsp of matcha powder, honey to taste",
    instructions: "Blend together until smooth",
    calories: 307,
    protein: 26.5,
    fat: 27.5,
    carbs: 40,
    sugar: 20
});

matchaSmoothie.save(function (err, data){
    if (err) console.log(err);
    else console.log('Saved : ', data);
});

*/

/*var pizza= new Recipe({
    recipeTitle: 'Large Pepperoni Pizza',
    ingredients: "Cheese, Bread, Pepperoni",
    instructions: "Throw some pepperonis on some bread and cheese and melt it",
    calories: 500,
    protein: 8,
    fat: 27.5,
    carbs: 40,
    sugar: 10
});



var salad= new Recipe({
    recipeTitle: 'Chicken Salad',
    ingredients: "Lettuce, Chicken, Dressing",
    instructions: "Cut Lettuce and chicken, add dresssing, toss",
    calories: 250,
    protein: 20,
    fat: 10,
    carbs: 20,
    sugar: 3
});



salad.save(function (err, data){
    if (err) console.log(err);
    else console.log('Saved : ', data);
});



var avocadoToast= new Recipe({
    recipeTitle: "Avocado Toast",
    ingredients: "Avocado, Whole Wheat Bread, Lemon, Salt, Pepper, Smoked Salmon (Optional)",
    instructions: "Mash avocado with lemon juice, add salt and pepper. Spread on toasted whole wheat bread and top with smoked salmon.",
    calories: 300,
    protein: 30,
    fat: 15,
    carbs: 18,
    sugar: 2
});

avocadoToast.save(function(err,data){
    if (err) console.log(err);
    else console.log('Saved : ', data);
});
*/