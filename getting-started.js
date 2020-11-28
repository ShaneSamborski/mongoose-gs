/* 

Turning this in now knowing its not functional/complete in order to just hopefully get some points for it before
I lose too much for it being too late. I'm going to try to look into mongoose more this weekend but if thats not enough
I think I could really benefit going over this assignment as a group or 1-on-1. I think I understand the basic overview of what
mongodb is doing but I feel like I can't navigate it and trying to read about is almost like reading a different language.

*/




//const is just another let 
//we declare a constant variable called mongoose
//we set it equal to the return value of require('mongoose'); 
const mongoose = require('mongoose'); 

//access the connect method of the mongoose object
//pass in the localhost test database
//and some options inside of another object
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

//make another constant variable called db
//and we set it equal to the connection property of our mongoose object 
const db = mongoose.connection;

//but then we acces the on and once methods of our connection property from our mongoose object
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //your tutorial and new code go here. 
    console.log("We're connected");

    /* schema  */
    const ingredientSchema = new mongoose.Schema({ //creates blueprint for the ingredient parameter
        name : String,
        measurement: String, 
        amount : Number 
    });

    const recipeSchema = new mongoose.Schema({ //creates blueprint for the recipes and what parameters they entail
        name : String, 
        description: String,
        instructions: String,
        ingredients : [ingredientSchema] //sets the ingredients parameter to be the previously created ingredient schema
    }); 


    /* model */ 
    const Recipe = mongoose.model('Recipe', recipeSchema); 

    /* documents */ 
    let stoneSoupObj = { //defines the parameters for the stone soup recipe
        name : "Stone Soup", 
        description: "A soup made by tricked villagers",
        instructions: "Trick each villager into donating for the soup for everyone",
        ingredients : [ 
            { name : "Carrots",
            measurement: "Cups", 
            amount : 5 },
            
            { name : "Onions",
            measurement: "Cups", 
            amount : 5.5 },

            { name : "Whatever is on hand",
            measurement: "Cups", 
            amount : 5 
            }
        ]
    };

    let rumFloatObj = { //defines parameters for the rum float recipe
        name : "Spiced Rum Root Beer Float", 
        description : "Classic root beer float, but not for kids!",
        instructions : "Pour root beer into glass and top with ice cream scoop. Pour shot of Kraken Spiced Rum on top.",
        ingredients : [ 
            { name : "Root beer",
            measurement : "can", 
            amount : 1 },
            
            { name : "Vanilla ice cream",
            measurement : "scoop", 
            amount : 1 },

            { name : "Kraken Spiced Rum",
            measurement : "shot", 
            amount : 1 }
        ]
    };

    let pancakesObj = { //defines the different parameters for the pancakes recipe
        name : "Chocolate Pancakes", 
        description : "A breakfast favorite with a chocolatey twist.",
        instructions : "Combine instant pancake mix, cocoa powder, and water and stir. Pan fry on medium heat.",
        ingredients : [ 
            { name : "Instant pancake mix",
            measurement : "Cup", 
            amount : 2 },
            
            { name : "Cocoa Powder",
            measurement : "Tablespoon", 
            amount : 1.5 },

            { name : "Water",
            measurement : "Cup", 
            amount : 0.75 }
        ]
    };
    let stoneSoup = new Recipe(stoneSoupObj);//inserts the stone soup recipe into the database

    let rumFloat = new Recipe(rumFloatObj);//inserts the rum root beer float recipe into the database

    let pancakes = new Recipe(pancakesObj);//inserts the pancake recipe into the database

let ramenObj = { //defines the parameters of the ramen recipe
            name : "Instant Ramen",
            description : "Extreme sodium overload.",
            instructions : "If you can't make this, there's no hope for you.",
            ingredients : [
                { name : "Noodles",
                measurement : "Brick",
                amount : 1},

                 { name : "Seasoning",
                measurement : "Packet",
                amount : 1},

                { name : "Water",
                measurement : "Cups",
                amount : 2}
            ]
        };

    let ramen = new Recipe(ramenObj) //inserts the ramen recipe into the database

let doc = Recipe.find(
    { name : "Chocolate Pancakes" }
);

console.log(doc);




/*
    let silence = new Kitten({ name : "Silence" }); 
    silence.speak(); 
    silence.name = "Loud";

    const fluffy = new Kitten({name : "fluffy"}); 
    fluffy.speak(); 

    /* how to save a document after it's been created/updated  
    fluffy.save(function(err, fluffy){
        if(err) return console.error(err); 
        fluffy.speak(); 
    });

    silence.save(function(err,cat){
        if(err) return console.error(err);
        cat.speak(); 
    })
    
    /*find is a method attached directly to our Kitten model/class 
    Kitten.find(function(err, kittens){
        if(err) return console.error(err);
        console.log(kittens); 
    })

    /* mongoose supports mongodb's rich query language 
    Kitten.find({ name: /^fluff/ }, function(err,cat){
        //check for errors
        //print to console. 
    })
*/
});

