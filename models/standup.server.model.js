var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none')
    },
    // Custom error text...
    'Select a valid member name.'];

var requiredStringValidator = [
    function (val) {
        var testVal = val.trim();
        return (testVal.length > 0)
    },
    // Custom error text...
    '{PATH} cannot be empty'];

var standupSchema = new Schema({
    memberName: {
        type: String,
        required: true,
        validate: memberNameValidator
    },
    project: {
        type: String,
        required: true,
        validate: requiredStringValidator
    },
    workYesterday: {
        type: String,
        required: true,
        validate: requiredStringValidator
    },
    workToday: {
        type: String,
        required: true,
        validate: requiredStringValidator
    },
    impediment: {
        type: String,
        required: true,
        default: 'none'
    },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Standup', standupSchema);

/*
// Schema
var S = new Schema( {
    id : Number,
    name : String
});

// Model
var M = mongoose.model("Test", S);

// Documents
var D = new Test({
    id : 2,
    name : "bbb"
});

 var D2 = new Test({
    id : 2,
    name : "ccc"
});

  
// Save the document to mongodb
 * D2.save(callback);
*/

