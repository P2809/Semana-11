
const db = require('../config/db'); 


const getAllUsers = async (req, res) => {
    try {
       
        const [rows] = await db.query('SELECT * FROM usuarios');
        
        
        res.status(200).json(rows);
    } catch (error) {
      
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error interno al consultar la base de datos" });
    }
};

module.exports = {
    getAllUsers
};