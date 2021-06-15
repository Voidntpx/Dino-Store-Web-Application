var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    productid: {type: Schema.Types.ObjectId, ref: 'Product'},
    title: {type: String, required: true},
    tag: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Wishlist', schema);