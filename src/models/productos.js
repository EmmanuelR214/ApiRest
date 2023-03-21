const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Productos: {
        type: String,
        required: true,
    },
    descripción: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    Stock:{
        type: Number,
        required: true
    },
    imagen:{
        type: String,
        required:true
    },
    unidad:{
        type: String,
        required:true
    },
    presentacion:{
        type: String,
        required:true
    },
});

module.exports = mongoose.model('productos', userSchema);

