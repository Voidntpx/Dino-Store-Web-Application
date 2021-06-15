var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    username: {type: String, required: true},
    title:{type: String, required: true},
    productid: {type: Schema.Types.ObjectId, ref: 'Product'},
    message: {type: String, required: true},
    dated: {type: Date,required: true}

});

module.exports = mongoose.model('Comment', schema);