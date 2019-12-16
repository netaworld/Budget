const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema = new Schema({name:{
    type: String, trim:true, require: "name of transaction"
},
value:{ type: Number, required: "type $ amout"},
date:{type: Date, default: Date.now}});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
