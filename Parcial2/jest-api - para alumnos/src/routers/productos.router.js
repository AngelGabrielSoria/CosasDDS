import express from "express";
import { Producto } from "../models/productos.js";

const router = express.Router();
router.get("api/productos/:id", async (req, res) => {
  try {
    const idProd = req.params.id;
    const found = await Producto.findOne({
      where: {
        id: idProd,
      },
    });

    if (found) {
      res.json(found);
    } else {
      res.status(404).send({ mensaje: "Producto No Encontrado" });
    }
  } catch (error) {
    res.status(500).send({ mensaje: "Producto no encontrado" });
  }
});

export default router;
