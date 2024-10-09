const express = require("express")
const app = express();
require("dotenv").config();
const tareaRoutes=require("./routes/tareasRoutes")


const PORT = process.env.PORT 

app.use(express.json());

app.use("/api", tareaRoutes);



app.listen(PORT, ()=> {
    console.log("conectado en servidor: " +PORT)
})

