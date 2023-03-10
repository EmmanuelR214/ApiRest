const { default: mongoose } = require("mongoose")
const mongo = require("mongoose")

const userSchema =  mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  app: {
    type: String,
    require: true
  },
  apm: {
    type: String,
    require: true
  },
  telefono:{
  type: Number,
  require: false
  },
  pais:{
    type: String,
    require: false
  },
  Estado:{
    type: String,
    require: false
  },
  Ciudad:{
    type: String,
    require: false
  },
  colonia:{
    type: String,
    require: false
  },
  calle:{
    type: String,
    require: false
  },
  descripcion:{
    type: String,
    require: false
  },
  correo:{
    type: String,
    require: true
  },
  contraseña:{
    type: String,
    require: true
  }
})

module.exports = mongoose.model('User', userSchema)
