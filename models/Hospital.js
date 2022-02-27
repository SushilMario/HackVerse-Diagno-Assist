const mongoose = require("mongoose");

let HospitalSchema = new mongoose.Schema
(
    {
        name: String,

        departments:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Department"
            }
        ]
    }
);

module.exports = mongoose.model("Hospital", HospitalSchema);