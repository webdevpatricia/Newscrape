var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

//Create the Schema
var HeadlineSchema = new Schema({
  headline: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: false
  },
  // Link the comment to the Headline
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});

// Create the model
var Headline = mongoose.model("Headline", HeadlineSchema);

// Export the model
module.exports = Headline;