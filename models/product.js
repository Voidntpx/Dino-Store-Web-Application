var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    selldescription: {type: String, required: true},
    type: {type: String, required: true},
    tag: {type: String, required: true},
    price: {type: Number, required: true},
    sellerid: {type: Schema.Types.ObjectId, ref: 'User'},
    dated: {type: Date,required: true},
    lastupdated: {type: Date,required: true}
});

module.exports = mongoose.model('Product', schema);