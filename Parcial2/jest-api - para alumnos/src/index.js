import express from 'express'
import router from './routers/productos.router.js'

const app = express()
app.use(express.json())

const PORT = 3000
app.use('/api', router)
app.listen(PORT, async() => {
    console.log(`App listening on port ${PORT}`)  
})
