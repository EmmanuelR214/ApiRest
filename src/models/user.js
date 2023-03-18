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
  correo:{
    type: String,
    require: true
  },
  pass:{
    type: String,
    require: true
  }
})

module.exports = mongoose.model('User', userSchema)
