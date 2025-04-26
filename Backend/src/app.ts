import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import PersonRoutes from "./routes/PersonRoutes";
import UserRoutes from "./routes/UserRoutes";
import VendedorRoutes from "./routes/VendedorRoutes";
import ProductoRoutes from "./routes/ProductoRoutes";
import ClienteRoutes from "./routes/ClienteRoutes";
import path from "path";
import MovimientoStockRouter from "./routes/MovimientoStockRouter";
import VentaRouter from "./routes/VentasRouter";
import VentaLineaRouter from "./routes/VentaLineaRoutes";

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use("/persona", PersonRoutes);
app.use('/user', UserRoutes);
app.use('/vendedor', VendedorRoutes);
app.use('/images', express.static(path.join(__dirname, '..', 'images')));
app.use('/client', ClienteRoutes);
app.use('/product', ProductoRoutes);
app.use('/movimientoStock', MovimientoStockRouter);
app.use('/venta', VentaRouter);
app.use('/ventaLinea', VentaLineaRouter);

export default app;