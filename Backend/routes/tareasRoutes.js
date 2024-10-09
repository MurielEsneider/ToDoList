const express = require ("express");
const router = express.Router();
const tareaRoutes = require("../controllers/tareaControllers")

router.get("/tareas",tareaRoutes.obtenerTarea)
router.post("/tareas",tareaRoutes.crearTarea)
router.put("/tareas/:id",tareaRoutes.actualizarTarea)
router.delete("/tareas/:id",tareaRoutes.eliminarTarea)


module.exports = router;