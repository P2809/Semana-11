
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

const createUser = async (req, res) => {

    const { nombre, email } = req.body;

  
    if (!nombre || !email) {
        return res.status(400).json({ error: "El nombre y el email son campos obligatorios" });
    }

    try {
 
        const querySQL = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
        await db.query(querySQL, [nombre, email]);

        res.status(201).json({ mensaje: "Usuario registrado con éxito en MySQL" });
        
    } catch (error) {
       
        console.error("Error al insertar usuario:", error);
        
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: "El correo electrónico ya se encuentra registrado" });
        }
        
        res.status(500).json({ error: "Error interno al guardar en la base de datos" });
    }
};


module.exports = {
    getAllUsers,
    createUser
};


