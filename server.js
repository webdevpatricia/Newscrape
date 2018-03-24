var express = require('express');
var bodyParser = require('body-parser');
// var exphbs = require('express-handlebars');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var request = require('request');
var db = require("./models/m_index.js");
// var route = require("./routes/r_index.js");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/headlines";


//create the app
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
// app.engine('handlebars', exphbs({defaultLayout:'main'}));
// app.set('view engine', 'handlebars');

//create the database connection
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/newscraper");

//route to scrape the articles
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with request
	url = 'https://www.washingtonpost.com';
	request(url, function(error, response, body) {
		if(! error){
		  	var $ = cheerio.load(body);
		  	$('.headline').each(function(i, element){
	  			var result = {};
		  			result.title = $(this).children('a').text();
		  			result.link = $(this).children('a').attr("href");
		  		
			  	db.Headline.create(result)
		        .then(function(dbHeadline) {
		          console.log(dbHeadline);
		        })
		        .catch(function(err){
		        	return res.json(err);
		        });
		    });
		};
    });
    res.send("Scrape Complete");
});


var port = 3000;
app.listen(port);



