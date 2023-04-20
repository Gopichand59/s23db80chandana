const mongoose = require("mongoose")
const JellyBellychema = mongoose.Schema({
JellyBelly: String,
size: String,
cost: Number
})
module.exports = mongoose.model("JellyBelly",JellyBellychema)