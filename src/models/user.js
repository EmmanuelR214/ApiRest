const { default: mongoose } = require("mongoose")
const mongo = require("mongoose")

const userSchema =  mongoose.Schema({
  usuario:{
    type: String,
    requiere: true
  },
  nombre: {
    type: String,
    require: true
  },
  apPaterno: {
    type: String,
    require: true
  },
  apMaterno: {
    type: String,
    require: true
  },
  Telefono: {
    type: String,
    requiere: true
  },
  email:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  }
})

module.exports = mongoose.model('User', userSchema)
