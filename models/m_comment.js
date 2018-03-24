var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

//Create the Schema
var CommentSchema = new Schema({
	Title: String,
	comment: String
});

// Create the model
var Comment = mongoose.model("Comment", CommentSchema);

// Export the model
module.exports = Comment;
