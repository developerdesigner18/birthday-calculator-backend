import express from "express";
import cors from "cors";
import { connect } from './db.js'
import setupMiddware from './middlewares/index.js'
import { restRouter } from './api/restRouter.js'

const app = express();
setupMiddware(app)
app.use(cors());

connect();

app.get('/', (req, res) => {
    res.send("hello")
})
app.use('/api', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Authorization, Accept, Access-Control-Al" +
        "low-Methods"
    )
    res.header("X-Frame-Options", "deny")
    res.header("X-Content-Type-Options", "nosniff")
    next();
})
app.use('/api', restRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, async () => {
    try {
        console.log(`Server listening on port ${PORT}`)
    } catch (err) {
        console.log("Server init error", err)
    }
})