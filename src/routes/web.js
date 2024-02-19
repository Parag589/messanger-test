import express from "express";
let router = express.Router();

// const app = express()
let initWebRoutes = (app) => {

    router.get("/", (req,res) =>{
        return res.send("Hello World")
    })
    // Home page route
    return app.use("/", router);
}

module.exports = initWebRoutes