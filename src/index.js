require("dotenv").config();
import express  from "express";
import bodyParser from "body-parser";
import configViewEngine from  "./config/viewEngine.js"
import initWebRoutes from  './routes/web.js'


let app = express()
configViewEngine(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
initWebRoutes(app);

const PORT=process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)    
})