var express = require('express');
var router = express.Router();

router.route('/recipes')

    //return all recipes
    .get(function(req, res){
        
        //temporary solution
        res.send({message: 'TODO return all recipes'});
    })

    .post(function(req, res){

        //temporary solution
        res.send ({message: 'TODO Create a new recipe'});
    })
    

module.exports = router;
