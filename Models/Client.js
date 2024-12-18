const mongoose = require("mongoose");

const schema = mongoose.Schema;
const ClientSchema = new schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    phone: {
        type: Number,
        required: true
    },
    location: {
        type: String
    },
    photo: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date
    },
    carteCategory: {
        type: Number
    },
    carteNumber: {
        type: Number
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    preferredLanguage: {
        type: String,
        default: "fr"
    },
    communicationPreferences: {
        email: { type: Boolean, default: true },
        sms: { type: Boolean, default: true },
    },
    status: {
        type: String,
        enum: ["active", "inactive", "suspended", "deleted"],
        default: "active"
    },
    signUpDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Client", ClientSchema);