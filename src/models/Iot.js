const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Tarjeta: {
        type: String,
        required: true,
    },
    ServoPuerta: {
        type: Number,
        required: true
    },
    ServoSeguro: {
        type: Number,
        required: true
    },
    Temperatura:{
        type: Number,
        required: true
    },
    Humedad:{
        type: Number,
        required:true
    },
    Hall:{
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Iot', userSchema);

