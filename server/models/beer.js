var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Beer = Schema({
    name:String,
    hoppy:Boolean
});

mongoose.connect(process.env.MONGOLAB_URI ||'mongodb://localhost/beer');

module.exports = mongoose.model('beer',Beer);
