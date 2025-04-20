
import app from "./app";
import pool from "./empresarial/config/database";

const startServer = async () => {
    try {
        await pool.getConnection();
        console.log("Conexión a la base de datos establecida.");
    
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}
startServer();