var mongoose = require('./mongodb.js'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: { type: String },
    age: { type: String},
    sex: { type: String,default: 'male'}
});

module.exports = mongoose.model('user',UserSchema);