import express from 'express'
import authRoutes from './routes/authRoute.js'
const app = express()
app.use(express.json())
app.use('/api/auth', authRoutes)
const port = 5000
app.listen(port, ()=>{
    console.log(`the server is listening on port ${port}`)
})