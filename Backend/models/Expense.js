const { mongoose } = require("mongoose");

const ExpenseSchema = mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    Date:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Expense",ExpenseSchema)