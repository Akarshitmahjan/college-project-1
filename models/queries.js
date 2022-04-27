const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: Number,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true,
            unique: true
        },
        date: {
            type: Date,
            required: true,
        },
        issue: {
            type: String,
            required: true
        }
    }
) 

const Query = new mongoose.model("Query", querySchema);

module.exports = Query;