USE MiFarma;

-- TABLA DE INFORMACION DE PERSNA
CREATE OR REPLACE VIEW datos_persona AS
SELECT 
  Persona.nombres, 
  Persona.apellidos, 
  Persona.fecha_nac, 
  EstadoCivil.EstadoCivil, 
  NivelSocioeco.NivelSocioeco AS tipo, 
  TipoDocumento.tipo AS TipoDocumento,
  Persona.codigo, 
  Pais.Pais,
  Departamento.Departamento,
  Provincia.Provincia,
  Distrito.Distrito,
  Persona.direccion
FROM Persona
INNER JOIN EstadoCivil     ON Persona.id_estado_civil   = EstadoCivil.id_estado_civil
INNER JOIN NivelSocioeco   ON Persona.id_nivel_socio    = NivelSocioeco.id_nivel_socio
INNER JOIN TipoDocumento   ON Persona.id_tipo_doc       = TipoDocumento.id_tipo_doc
INNER JOIN Distrito        ON Persona.id_distrito       = Distrito.id_distrito
INNER JOIN Provincia       ON Distrito.id_provincia     = Provincia.id_provincia
INNER JOIN Departamento    ON Provincia.id_departamento = Departamento.id_departamento
INNER JOIN Pais            ON Departamento.id_pais      = Pais.id_pais;
select * from datos_persona;

-- Vista de Stock Actual por Producto
CREATE VIEW Vista_StockActual AS
SELECT 
  p.id_producto,
  p.nombre,
  SUM(CASE WHEN ms.tipo_mov = 'entrada' THEN ms.cantidad ELSE -ms.cantidad END) AS stock_actual
FROM Producto p
LEFT JOIN MovimientoStock ms ON p.id_producto = ms.id_producto
GROUP BY p.id_producto, p.nombre;
SELECT * FROM Vista_StockActual;

-- Vista de Productos con Bajo Stock (menos de 10 unidades)
CREATE VIEW Vista_ProductosBajoStock AS
SELECT *
FROM Vista_StockActual
WHERE stock_actual < 10;
SELECT * FROM Vista_ProductosBajoStock;

--  Vista de Total Vendido por Producto
CREATE VIEW Vista_VentasPorProducto AS
SELECT 
  p.id_producto,
  p.nombre,
  SUM(vl.cantidad) AS total_vendido,
  SUM(vl.subtotal) AS total_ingresos
FROM Producto p
JOIN VentaLinea vl ON p.id_producto = vl.id_producto
GROUP BY p.id_producto, p.nombre;
SELECT * FROM Vista_VentasPorProducto;

--  Vista de Top 5 Productos Más Vendidos
CREATE VIEW Vista_Top5MasVendidos AS
SELECT *
FROM Vista_VentasPorProducto
ORDER BY total_vendido DESC
LIMIT 5;
SELECT * FROM Vista_Top5MasVendidos;

-- Vista de Ventas Detalladas
CREATE VIEW Vista_VentasDetalladas AS
SELECT 
  v.id_venta,
  v.fecha_emision,
  c.id_cliente,
  per.apellidos AS cliente_apellido,
  per.nombres AS cliente_nombre,
  p.nombre AS producto,
  vl.cantidad,
  vl.precio_unitario,
  vl.subtotal
FROM Venta v
JOIN Cliente c ON v.id_cliente = c.id_cliente
JOIN usuario u ON c.id_usuario = u.id_usuario
JOIN Persona per ON u.id_persona = per.id_persona
JOIN VentaLinea vl ON v.id_venta = vl.id_venta
JOIN Producto p ON vl.id_producto = p.id_producto;

--  Vista de Total de Ventas por Día
CREATE VIEW Vista_TotalVentasPorDia AS
SELECT 
  DATE(fecha_emision) AS fecha,
  COUNT(*) AS total_ventas,
  SUM(total) AS total_monto
FROM Venta
GROUP BY DATE(fecha_emision)
ORDER BY fecha DESC;
SELECT * FROM Vista_TotalVentasPorDia;

-- Vista de Ingresos y Egresos de Stock
CREATE VIEW Vista_MovimientosStockResumen AS
SELECT 
  p.id_producto,
  p.nombre,
  SUM(CASE WHEN tipo_mov = 'entrada' THEN cantidad ELSE 0 END) AS total_entradas,
  SUM(CASE WHEN tipo_mov = 'salida' THEN cantidad ELSE 0 END) AS total_salidas
FROM MovimientoStock ms
JOIN Producto p ON ms.id_producto = p.id_producto
GROUP BY p.id_producto, p.nombre;
SELECT * FROM Vista_MovimientosStockResumen;

--  Vista de Clientes con Total Comprado
CREATE VIEW Vista_ClientesTotalComprado AS
SELECT 
  c.id_cliente,
  per.nombres,
  per.apellidos,
  SUM(v.total) AS total_comprado
FROM Cliente c
JOIN usuario u ON c.id_usuario = u.id_usuario
JOIN Persona per ON u.id_persona = per.id_persona
JOIN Venta v ON v.id_cliente = c.id_cliente
GROUP BY c.id_cliente, per.nombres, per.apellidos;
SELECT * FROM Vista_ClientesTotalComprado;

-- Vista de Vendedores con Total de Ventas
CREATE VIEW Vista_VendedoresTotalVentas AS
SELECT 
  v.id_vendedor,
  p.nombres,
  p.apellidos,
  COUNT(ve.id_venta) AS ventas_realizadas,
  SUM(ve.total) AS total_vendido
FROM Vendedor v
JOIN usuario u ON v.id_usuario = u.id_usuario
JOIN Persona p ON u.id_persona = p.id_persona
JOIN Venta ve ON ve.id_vendedor = v.id_vendedor
GROUP BY v.id_vendedor, p.nombres, p.apellidos;
SELECT * FROM Vista_VendedoresTotalVentas;

-- Vista Detallada de Ubicación de Personas
CREATE VIEW Vista_Persona_Ubicacion AS
SELECT 
  per.id_persona,
  per.nombres,
  per.apellidos,
  d.Distrito,
  pr.Provincia,
  dp.Departamento,
  pa.Pais,
  per.direccion
FROM Persona per
LEFT JOIN Distrito d ON per.id_distrito = d.id_distrito
LEFT JOIN Provincia pr ON d.id_provincia = pr.id_provincia
LEFT JOIN Departamento dp ON pr.id_departamento = dp.id_departamento
LEFT JOIN Pais pa ON dp.id_pais = pa.id_pais;

SELECT * FROM Vista_Persona_Ubicacion;



