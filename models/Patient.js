// var mongoose = require("mongoose"),
// 
const   passport = require("passport"),
        mongoose = require("mongoose");

let UserSchema = new mongoose.Schema
(
    {
        username: String,
        googleId: String,
        email: String,
        phoneNumber: String,
        
        address:
        {
            line1: String,
            line2: String,
            city: String,
            state: String,
            pinCode: String
        },

        bankAccountNo: String,

        isAdmin:
        {
            type: Boolean,
            default: false
        },

        currentOrder:
        {
            items:
            [
                {
                    product:
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Product"
                    },
                    quantity:
                    {
                        type: Number,
                        default: 1
                    },
                    customisation:
                    {
                        type: String,
                        default: "None"
                    }
                }
            ],
            total: Number,
            deliveryCharge: Number,
            orderDate: Date,
            isCart:
            {
                type: Boolean,
                default: false
            }
        },

        appointments:
        [
            {
                appointment:
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Appointment"
                }
            }
        ],

		diagnoses:
        [
            {
                product:
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Diagnosis"
                }
            }
        ]
    }
);

module.exports = mongoose.model("User", UserSchema);
