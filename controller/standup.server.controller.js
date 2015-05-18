var Standup = require('../models/standup.server.model.js');

/************************************************************************************************

Note that we execute "find", "update" and "remove" on the model.
The result returned (filtered or not) as a collection of sub documents/fields

 * 
 * Retreive Documents
 * 
 * 
// #1
// returns query! not results yet! we need to exec this query against the mongodb
var q = Standup.find(); 

// #2
// with callback .. exec the query immediately 
Standup.find(function (err, results) { 

});

// #3
// with callback & query conditions .. exec the query immediately 
Standup.find({"memberName" :" bbb", "project" : { $gt : 10 }}, "memberName workToday",  function (err, results) { 

});

// #4 - also: findOne(), findById()

 * 
 * Update Documents
 * 
* 

// option #1
var condition = { "memberName" : "bbb" };
var update = { "impediment" : "some updated value" };

Standup.update(condition, update, { multi : true }, function (err, numberAffected, rawResponse) { });

// option #2

Standup.findOne({ "memberName" : "bbb" }, function (err, doc) {
    doc.impediment = " some updated value ";
    doc.save(function (err) { });
});



* 
* Remove Documents
* 
* 

Standup.remove() .. 

************************************************************************************************/

exports.list = function (req, res) {
    var query = Standup.find();
    
    query.sort({ createdOn: 'desc' })
        .limit(12)
        .exec(function (err, results) {
        //res.send(results);
        res.render('index', { title: 'Standup - List', notes: results });
    });
};

exports.filterByMember = function (req, res) {
    var query = Standup.find();
    var filter = req.body.memberName;
    
    query.sort({ createdOn: 'desc' });
    
    if (filter.length > 0) {
        query.where({ memberName: filter })
    }
    
    query.exec(function (err, results) {
        res.render('index', { title: 'Standup - List', notes: results });
    });
};


exports.create = function (req, res) {
    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });
    
    // entry.save();
    
    entry.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving the stand-up meeting note. ' + err;
            res.render('newnote', { title: 'Standup - New Note (error)', message: errMsg });
        }
        else {
            console.log('Stand-up meeting note was saved!');
            // Redirect to the home page to display list of notes...
            res.redirect(301, '/');
        }
    });
    
    // Redirect to the home page...
    // res.redirect(301, '/');
};

exports.getNote = function (req, res) {
    res.render('newnote', { title: 'Standup - New Note' });
};
