

// // Route for saving/updating an Article's associated Note
// app.post("/headlines/:id", function(req, res) {
//   // Create a new note and pass the req.body to the entry
//   db.Comment.create(req.body)
//     .then(function(dbComment) {
//       // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
//       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.Headline.findOneAndUpdate({ _id: req.params.id }, { comment: dbComment._id }, { new: true });
//     })
//     .then(function(dbHeadline) {
//       // If we were able to successfully update an Article, send it back to the client
//       res.json(dbHeadline);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });
