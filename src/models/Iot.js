const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    ServoPuerta: {
        type: Number,
    },
    ServoSeguro: {
        type: Number,
    },
    Temperatura:{
        type: Number,
    },
    Humedad:{
        type: Number,
    },
    Hall:{
        type: Number,
    }
});

module.exports = mongoose.model('Iot', userSchema);

