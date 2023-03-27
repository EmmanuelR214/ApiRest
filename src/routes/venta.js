const express =  require("express")
const ventas = require("../models/ventas")

const router = express.Router()

//Insertar un dato
router.post('/venta', async (req, res) => {
    const {cantidad, total, usuario, producto} = req.body;
    
    try {
        const fechaAct = Date()
        
        const shop = new ventas({
            fecha: fechaAct,
            cantidad,
            total,
            usuario,
            producto
        });
        
        await shop.save();
        
        res.status(201).json({ message: 'venta registrada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Interno del Servidor' });
    }
});

//mostrar todos los datos
router.get('/venta', (req, res) => {
    ventas
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//encontrar un usuario especifico por id
router.get('/venta/user/:usuario', (req, res) => {
    ventas
        .findOne({usuario: req.params.usuario})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})


router.get('/venta/:product_id', function(req, res) {
  const product_id = req.params.usuario;

  db.collection('Users').find({usuario: product_id}).toArray(function(err, result) {
    if (err) throw err;

    res.send(result);
  });
});


module.exports = router

/*
router.post('/venta', (req, res) => {
    
    const user = Ventas(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
*/
