import express from "express";
import service from "./src/services/reparaciones.service.js";

import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

app.get("/reparaciones", async (req, res) => {
    try{
        const reparaciones = await service.getAll();
        res.json(reparaciones);
    }catch(e){
        console.log(e)
        res.status(500).send({mensaje: 'Ha ocurrido un error interno.'})
    }
   
})

app.post('/reparaciones', async (req, res) => {
    try{
       const ordenId = await service.create(req.body)
    return res.json(ordenId);
    }catch(e){
        console.log(e)
        res.status(500).send({mensaje: 'Ha ocurrido un error interno.'})
    }
});

app.listen(3001, () => {
    console.log("Servidor iniciado en el puerto 3001");
});
