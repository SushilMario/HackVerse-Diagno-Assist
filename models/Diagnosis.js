const mongoose = require("mongoose");

let DiagnosisSchema = new mongoose.Schema
(
    {
        patient:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        },

        consultingDoctor:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        }, 

        timeSlotStart: Number,
        diagnosisDate: Date
    }
);

module.exports = mongoose.model("Diagnosis", DiagnosisSchema);