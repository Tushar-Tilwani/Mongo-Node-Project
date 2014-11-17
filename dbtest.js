
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');


	DbConnect = function(host, port) {
  this.db= new Db('SampleSocial', new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};
	


  // Fetch a collection to insert document into
  
  // Insert a single document
    // Fetch the document
	DbConnect.prototype.getCollection = function (callback,collectionName)
	{
	if(collectionName)
	{
		 this.db.collection(collectionName,function(err, collection) {
		 if( err ) callback(err);
		 else callback(null, collection);
		 });
	 }
	}
	
	
	DbConnect.prototype.findOne= function (callback,dbVal)
	{
			this.getCollection(function(err,collection)
			{
				 if(err)
				 {
					callback(err);
				 }
				 else
				 {
				      collection.findOne({},{text:1}, function(err, item) {
					  if(err)
					  {
						callback(err);
					  }
					  else
					  {
					  //i=item;
					   callback(err,item);		  
					  //db.close();
					  }
					});
				}
			},dbVal.collectionName);
	}
	
	
	
	
	DbConnect.prototype.find= function (callback,dbVal)
	{
			this.getCollection(function(err,collection)
			{
				 if(err)
				 {
					callback(err);
				 }
				 else
				 {
				      collection.find(dbVal.projection,dbVal.selection).toArray(function(err, items) {
					  if(err)
					  {
						callback(err);
					  }
					  else
					  {
					  //i=item;
					   callback(err,items);		  
					  //db.close();
					  }
					});
				}
			},dbVal.collectionName);
	}
	
	
module.exports.DbConnect = DbConnect;
