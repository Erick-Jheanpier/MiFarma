use MiFarma;
-- PERSONA
call insertar_persona("ERICK JHEANPIER","PEREZ SARAVIA","2000-08-24","75427180@gmail.com","925313577",1,1,1,"75427180",1,"Barrio el porvenir");
select * from persona;
-- usuario
call insertar_usuario("Erick2000","ADMIN",1);
select * from usuario;
-- vendedor
call insertar_vendedor(1,"XAAZ","2025-04-18",1);

-- cliente
call insertar_cliente(1,1);

-- producto
call InsertarProducto("laptop lenovo 3","es una laptop","imagen1.jpg",1,1,350,1);

-- -- MOVIMIENTO STOCK
call RegistrarMovimientoStock(1,"entrada",200,"nueva mercaderia");
CALL RegistrarMovimientoStock(1, 'salida', 30, 'Venta a cliente');
select * from MovimientoStock;

-- VENTA
call InsertarVenta(1,1,1);
SELECT * FROM VENTA;

-- VENTAS LINEA
CALL InsertarVentaLinea(1,1,8);
SELECT * FROM VentaLinea;