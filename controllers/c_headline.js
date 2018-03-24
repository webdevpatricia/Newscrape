var Headline = require('./models.m_headline.js');

//route to homepage
exports.index = function(req, res, next){
	res.render('home');
}

// //route for the onclick for button "Get Articles"
// exports.headline_scrape = function(req,res){
// 	res.render('NOT IMPLEMENTED: Headline scrape');
// };

// //route to display scraped headlines
// exports.headline_list = function(req, res, next){
// 	Headline.find();
// 	res.render('headline_list');
// };

// //route to save a headline
// exports.save_headline = function(req, res){

// 	res.render('NOT IMPLEMENTED: save headline');
// }

// //route to saved headlines
// exports.saved_headlines = function(req,res){
// 	res.send('NOT IMPLEMENTED: saved healines');
// };

// //route to delete a saved headline
// exports.saved_headline_delete = function(req,res){
// 	res.send('NOT IMPLEMENTED: saved headline delete');
// };




