const express =  require("express")
const userSchema = require('../models/user')

const router = express.Router()

//Crear usuarios

router.post('/users', (req, res) => {
  const user = userSchema(req.body)
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

//encontrar un usuario especifico
router.get('/users/:id', (req, res) => {
  const {id} = req.params
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

//actualizar un usuario
router.put('/users/:id', (req, res) => {
  const {id} = req.params
  const {telefono, Estado, Ciudad, colonia, calle, descripcion} = req.body
  userSchema
    .updateOne({_id: id}, { $set: {telefono, Estado, Ciudad, colonia, calle, descripcion}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

module.exports = router


//eliminar un usuario
/*
router.delete('/users/:id', (req, res) => {
  const {id} = req.params
  userSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
*/

//mostrar todos los datos
/*
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})*/