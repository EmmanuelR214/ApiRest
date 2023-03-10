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

// update a productos
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { Producto, descripción, precio, Stock,imagen,unidad,presentacion,fecha_creación} = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { Producto, descripción, precio, Stock,imagen,unidad,presentacion,fecha_creación}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;