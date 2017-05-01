var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

router.route('/recipes')

    //return all recipes
    .get(function(req, res)
    {
        Recipe.find(function(err, data){
            if(err){
                res.send(500, err);
            }

            return res.send(data);
    });
        //temporary solution
        res.send({message: 'TODO return all recipes'});
    })

    .post(function(req, res)
    {
        var recipe = new Recipe();
        recipe.recipeTitle = req.body.text
        
        //temporary solution
        res.send ({message: 'TODO Create a new recipe'});
    })
    

module.exports = router;
