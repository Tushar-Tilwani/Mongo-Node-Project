// load the things we need
var express = require('express');
var app = express();
var DbConnect = require('./dbtest').DbConnect;
var db = new DbConnect('localhost', 27017);
var dbVals={
collectionName:'Tweets',
selection:{},
projection:{}
}

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/public'));
// index page 
app.get('/', function(req, res) {

//console.log('1');
/*if(db && db.findOne)
{
	db.findOne(function(err,item)
		{
			console.log(item);
			res.render('pages/index',{ title: item});
		},dbVals);
}
else
{
		res.render('pages/index',{ title: {text:"Data Coming!!"}});
}*/

dbVals.projection={fromUser:'DrewEMTP'};
dbVals.selection={_id:0};

db.find(function(err,item)
		{
		if(item && item.length)
		{
			console.log(item[0]);
			res.render('pages/index',{ title: item});
		}
		},dbVals);	
});

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');