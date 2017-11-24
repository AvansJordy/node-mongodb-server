const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    description: String,
    imagePath: String
}, {
    timestamps: true
});


const Recipe = mongoose.model('recipe', RecipeSchema);

// Add a 'dummy' user (every time you require this file!)
// const user = new User({
//     name: 'Sloppy Joe',
//     description: 'its a person or recipe',
//     imagePath: 'http://del.h-cdn.co/assets/17/25/980x490/landscape-1498148062-delish-homemade-sloppy-joes-horizontal-1024.jpg'
// }).save();

module.exports = Recipe;