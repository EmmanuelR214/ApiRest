const express =  require("express")
const userSchema = require('../models/Iot')

const router = express.Router()

//Insertar un dato
router.post('/iots', (req, res) => {
  const user = userSchema(req.body)
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

//mostrar todos los datos
router.get('/iots', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//actualizar un usuario
router.put('/iots/:id', (req, res) => {
  const {id} = req.params
  const {ServoPuerta, ServoSeguro} = req.body
  userSchema
    .updateOne({_id: id}, { $set: {ServoPuerta, ServoSeguro}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

module.exports = router
