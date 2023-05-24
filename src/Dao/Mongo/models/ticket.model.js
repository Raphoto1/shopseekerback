import mongoose from "mongoose";

const ticketCollection = "tickets";

const ticketSchema = new mongoose.Schema({
    code:{
        type:String,
        require:true
    },
    purchase_datetime: Date,
    amount: Number,
    purchaser:{
        type:String,
        require:true
    }
})

const ticketModel = mongoose.model("tickets", ticketSchema);
export default ticketModel;