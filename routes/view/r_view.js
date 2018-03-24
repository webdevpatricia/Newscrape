var express = require('express');
var router = express.Router();

// var fetchController = require('../../controllers/c_fetch.js');
// var commentController = require('../../controllers/c_comment.js');
var headlineController = require('../../controllers/c_headline.js');


//display the home page
router.get('/',headlineController.index);

// //scrape the headlines
// router.get('/', headlineController.headline_scrape);

//display scraped headlines
router.get('/' headlineController.headline_list);

// //save the headline (post)
// router.post('/headline/saved', controller.headline.save_headline);

// //display saved headlines
// router.get('/headline/saved', controller.headline.saved_headlines);

// //get request to delete saved headline
// router.get('/headline/:id/delete', controller.headline.saved_headline_delete);

// //post request to delete saved headline
// router.post('/headline/:id/delete', controller.headline.saved_headline_delete):





// var dbComment = require('../../models/m_index.js');

// app.get('/',function(req,res){
//   db.Headline.find()
//     .then(function(dbArticle) {
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
//   res.render(Headline);
// });

// app.get("/scrape", function(req, res) {
//   // First, we grab the body of the html with request
//   axios.get("http://www.echojs.com/").then(function(response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(response.data);

//     // Now, we grab every h2 within an article tag, and do the following:
//     $("article h2").each(function(i, element) {
//       // Save an empty result object
//       var result = {};

//       // Add the text and href of every link, and save them as properties of the result object
//       result.title = $(this)
//         .children("a")
//         .text();
//       result.link = $(this)
//         .children("a")
//         .attr("href");

//       // Create a new Article using the `result` object built from scraping
//       db.Article.create(result)
//         .then(function(dbArticle) {
//           // View the added result in the console
//           console.log(dbArticle);
//         })
//         .catch(function(err) {
//           // If an error occurred, send it to the client
//           return res.json(err);
//         });
//     });

//     // If we were able to successfully scrape and save an Article, send a message to the client
//     res.send("Scrape Complete");
//   });
// });


// // Route for getting all Articles from the db
// app.get("/articles", function(req, res) {
//   // Grab every document in the Articles collection
//   db.Article.find({})
//     .then(function(dbArticle) {
//       // If we were able to successfully find Articles, send them back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// // Route for grabbing a specific Article by id, populate it with it's note
// app.get("/articles/:id", function(req, res) {
//   // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//   db.Article.findOne({ _id: req.params.id })
//     // ..and populate all of the notes associated with it
//     .populate("note")
//     .then(function(dbArticle) {
//       // If we were able to successfully find an Article with the given id, send it back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });
