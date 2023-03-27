const express = require("express");
const userSchema = require("../models/productos");

const router = express.Router();

// create productos
router.post("/products", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all productos
router.get("/products", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a producto
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a productos
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// actualiza a stock con id
router.put("/products/stock/:id", (req, res) => {
  const { id } = req.params;
  const {Stock} = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: {Stock}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;


/*
// get all productos
router.get("/products", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
*/

/*
//mostrar todos los productos referenciados
router.get('/products/referent', async (req, res) =>{
  try {
    const productos = await userSchema.find().populate('unidad', 'categoria')
    res.json(productos)
  } catch (error) {
    console.log('ocurrio un error ', error)
    res.status(505).json({message: 'Error al traer los datos'})
  }
})
*/
