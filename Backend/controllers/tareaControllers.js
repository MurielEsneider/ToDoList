const { Lista } = require('../models');

const obtenerTarea = async (req, res) => {
    try {
        const tareas = await Lista.findAll();
        res.json(tareas);
    } catch (e){
        res.status(500).json({mensaje: "Error al obtener tarea", error: e.message});
    }
}

const crearTarea = async (req, res) =>{
    try {
        const {descripcion, estado } = req.body;
        const nuevoDato = new Lista({descripcion, estado });
        await nuevoDato.save();
        res.json({mensaje:nuevoDato})
    } catch (e) {
        res.status(500).json({mensaje: "error al crear tarea"})
    }
}

const actualizarTarea = async (req, res) => {
    try {
        let { id } = req.params;
        let { descripcion, estado } = req.body;

        if (!descripcion || !estado) {
            return res.json({ mensaje: "Los espacios están vacíos" });
        }
        let tareas = await Lista.findByPk(id);
        if (!tareas) {
            return res.status(404).json({ mensaje: "Tarea no encontrada" });
        }
        await tareas.update({ descripcion, estado });

        return res.json({ mensaje: "tarea actualizado", tareas });
    } catch (e) {
        res.status(500).json({ mensaje: "Error al actualizar el tareas", error: e.message });
    }
};


const eliminarTarea = async (req, res) => {
    try {
        let { id } = req.params;

        let tareas = await Lista.findByPk(id);

        if (!tareas) {
            return res.status(404).json({ mensaje: "Id no existe" });
        }
        await tareas.destroy();

        return res.json({ mensaje: "Tarea eliminada", tareas });
    } catch (e) {
        res.status(500).json({ mensaje: "Error en el método eliminar tareas", error: e.message });
    }
};


module.exports = {obtenerTarea, crearTarea, actualizarTarea, eliminarTarea}