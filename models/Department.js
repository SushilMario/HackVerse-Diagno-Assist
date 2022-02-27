const mongoose = require("mongoose");

let DepartmentSchema = new mongoose.Schema
(
    {
        name: String,
        departmentNumber: Number,
        hospital: String,
        hospitalID: mongoose.Schema.Types.ObjectId,

        doctors:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Doctor"
            }
        ]
    }
);

module.exports = mongoose.model("Department", DepartmentSchema);