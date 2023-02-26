const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    image: String,
    moviecategory: String,
    moviedirector: String,
    rating: String,
    releasedate: String,
    title: String,
},{ id: false });

module.exports = mongoose.model("Movie", movieSchema);