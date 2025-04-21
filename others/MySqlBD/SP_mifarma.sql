use MiFarma;
delimiter //

-- PAIS
create procedure insertar_pais(
in _Pais VARCHAR(100)
)
begin
insert into Pais(Pais) values(_Pais);
end //
delimiter ;

delimiter //
create procedure actualizar_pais(
in _id_pais      INT,
in _Pais VARCHAR(100)
)
begin
update  Pais 
set Pais=_Pais
where id_pais=_id_pais;
end //
delimiter ;

delimiter //
create procedure eliminar_pais(
in _id_pais      INT
)
begin
delete from Pais
where id_pais=_id_pais;
end //
delimiter ;

-- DEPARTAMENTO

DELIMITER //
CREATE PROCEDURE insertar_departamento(
    IN _Departamento VARCHAR(100),
    IN _id_pais INT
)
BEGIN
    INSERT INTO Departamento(Departamento, id_pais)
    VALUES (_Departamento, _id_pais);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_departamento(
    IN _id_departamento INT,
    IN _Departamento VARCHAR(100),
    IN _id_pais INT
)
BEGIN
    UPDATE Departamento
    SET Departamento = _Departamento,
        id_pais = _id_pais
    WHERE id_departamento = _id_departamento;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_departamento(
    IN _id_departamento INT
)
BEGIN
    DELETE FROM Departamento
    WHERE id_departamento = _id_departamento;
END;
//
DELIMITER ;


-- PROVINCIA 
DELIMITER //
CREATE PROCEDURE insertar_provincia(
    IN _Provincia VARCHAR(100),
    IN _id_departamento INT
)
BEGIN
    INSERT INTO Provincia(Provincia, id_departamento)
    VALUES (_Provincia, _id_departamento);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_provincia(
    IN _id_provincia INT,
    IN _Provincia VARCHAR(100),
    IN _id_departamento INT
)
BEGIN
    UPDATE Provincia
    SET Provincia = _Provincia,
        id_departamento = _id_departamento
    WHERE id_provincia = _id_provincia;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_provincia(
    IN _id_provincia INT
)
BEGIN
    DELETE FROM Provincia
    WHERE id_provincia = _id_provincia;
END;
//
DELIMITER ;


-- DISTRITO 
DELIMITER //
CREATE PROCEDURE insertar_distrito(
    IN _Distrito VARCHAR(100),
    IN _id_provincia INT
)
BEGIN
    INSERT INTO Distrito(Distrito, id_provincia)
    VALUES (_Distrito, _id_provincia);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_distrito(
    IN _id_distrito INT,
    IN _Distrito VARCHAR(100),
    IN _id_provincia INT
)
BEGIN
    UPDATE Distrito
    SET Distrito = _Distrito,
        id_provincia = _id_provincia
    WHERE id_distrito = _id_distrito;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_distrito(
    IN _id_distrito INT
)
BEGIN
    DELETE FROM Distrito
    WHERE id_distrito = _id_distrito;
END;
//
DELIMITER ;

-- ESTADO CIVIL
DELIMITER //
CREATE PROCEDURE insertar_estado_civil(
    IN _EstadoCivil VARCHAR(50)
)
BEGIN
    INSERT INTO EstadoCivil(EstadoCivil)
    VALUES (_EstadoCivil);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_estado_civil(
    IN _id_estado_civil INT,
    IN _EstadoCivil VARCHAR(50)
)
BEGIN
    UPDATE EstadoCivil
    SET EstadoCivil = _EstadoCivil
    WHERE id_estado_civil = _id_estado_civil;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_estado_civil(
    IN _id_estado_civil INT
)
BEGIN
    DELETE FROM EstadoCivil
    WHERE id_estado_civil = _id_estado_civil;
END;
//
DELIMITER ;

 -- NIVEL SOCIOECONOMICO 
 DELIMITER //
CREATE PROCEDURE insertar_nivel_socioeco(
    IN _NivelSocioeco VARCHAR(50)
)
BEGIN
    INSERT INTO NivelSocioeco(NivelSocioeco)
    VALUES (_NivelSocioeco);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_nivel_socioeco(
    IN _id_nivel_socio INT,
    IN _NivelSocioeco VARCHAR(50)
)
BEGIN
    UPDATE NivelSocioeco
    SET NivelSocioeco = _NivelSocioeco
    WHERE id_nivel_socio = _id_nivel_socio;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_nivel_socioeco(
    IN _id_nivel_socio INT
)
BEGIN
    DELETE FROM NivelSocioeco
    WHERE id_nivel_socio = _id_nivel_socio;
END;
//
DELIMITER ;


-- TIPO DOCUMENTO 
DELIMITER //
CREATE PROCEDURE insertar_tipo_documento(
    IN _tipo VARCHAR(50),
    IN _codigo VARCHAR(20)
)
BEGIN
    INSERT INTO TipoDocumento(tipo, codigo)
    VALUES (_tipo, _codigo);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_tipo_documento(
    IN _id_tipo_doc INT,
    IN _tipo VARCHAR(50),
    IN _codigo VARCHAR(20)
)
BEGIN
    UPDATE TipoDocumento
    SET tipo = _tipo,
        codigo = _codigo
    WHERE id_tipo_doc = _id_tipo_doc;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_tipo_documento(
    IN _id_tipo_doc INT
)
BEGIN
    DELETE FROM TipoDocumento
    WHERE id_tipo_doc = _id_tipo_doc;
END;
//
DELIMITER ;


-- TIPO COMPROBANTE 
DELIMITER //
CREATE PROCEDURE insertar_tipo_comprobante(
    IN _TipoComprobante VARCHAR(50)
)
BEGIN
    INSERT INTO TipoComprobante(TipoComprobante)
    VALUES (_TipoComprobante);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_tipo_comprobante(
    IN _id_tipo_comprobante INT,
    IN _TipoComprobante VARCHAR(50)
)
BEGIN
    UPDATE TipoComprobante
    SET TipoComprobante = _TipoComprobante
    WHERE id_tipo_comprobante = _id_tipo_comprobante;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_tipo_comprobante(
    IN _id_tipo_comprobante INT
)
BEGIN
    DELETE FROM TipoComprobante
    WHERE id_tipo_comprobante = _id_tipo_comprobante;
END;
//
DELIMITER ;

-- CATEGORIA 
DELIMITER //
CREATE PROCEDURE insertar_categoria(
    IN _Categoria VARCHAR(50)
)
BEGIN
    INSERT INTO Categoria(Categoria)
    VALUES (_Categoria);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_categoria(
    IN _id_categoria INT,
    IN _Categoria VARCHAR(50)
)
BEGIN
    UPDATE Categoria
    SET Categoria = _Categoria
    WHERE id_categoria = _id_categoria;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_categoria(
    IN _id_categoria INT
)
BEGIN
    DELETE FROM Categoria
    WHERE id_categoria = _id_categoria;
END;
//
DELIMITER ;

-- ESTADO PRODUCTO
DELIMITER //
CREATE PROCEDURE insertar_estado_producto(IN _EstadoProducto VARCHAR(50))
BEGIN
    INSERT INTO EstadoProducto (EstadoProducto) VALUES (_EstadoProducto);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_estado_producto(IN _id_estado_producto INT, IN _EstadoProducto VARCHAR(50))
BEGIN
    UPDATE EstadoProducto SET EstadoProducto = _EstadoProducto WHERE id_estado_producto = _id_estado_producto;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_estado_producto(IN _id_estado_producto INT)
BEGIN
    DELETE FROM EstadoProducto WHERE id_estado_producto = _id_estado_producto;
END;
//
DELIMITER ;

-- ESTADO CLIENTE 
DELIMITER //
CREATE PROCEDURE insertar_estado_cliente(IN _EstadoCliente VARCHAR(50))
BEGIN
    INSERT INTO EstadoCliente (EstadoCliente) VALUES (_EstadoCliente);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_estado_cliente(IN _id_estado_cliente INT, IN _EstadoCliente VARCHAR(50))
BEGIN
    UPDATE EstadoCliente SET EstadoCliente = _EstadoCliente WHERE id_estado_cliente = _id_estado_cliente;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_estado_cliente(IN _id_estado_cliente INT)
BEGIN
    DELETE FROM EstadoCliente WHERE id_estado_cliente = _id_estado_cliente;
END;
//
DELIMITER ;

-- ESTADO VENDEDOR 
DELIMITER //
CREATE PROCEDURE insertar_estado_vendedor(IN _EstadoVendedor VARCHAR(50))
BEGIN
    INSERT INTO EstadoVendedor (EstadoVendedor) VALUES (_EstadoVendedor);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_estado_vendedor(IN _id_EstadoVendedor INT, IN _EstadoVendedor VARCHAR(50))
BEGIN
    UPDATE EstadoVendedor SET EstadoVendedor = _EstadoVendedor WHERE id_EstadoVendedor = _id_EstadoVendedor;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_estado_vendedor(IN _id_EstadoVendedor INT)
BEGIN
    DELETE FROM EstadoVendedor WHERE id_EstadoVendedor = _id_EstadoVendedor;
END;
//
DELIMITER ;

-- PERSONA 
DELIMITER //
CREATE PROCEDURE insertar_persona(
    IN _nombres VARCHAR(100),
    IN _apellidos VARCHAR(100),
    IN _fecha_nac DATE,
    in _correo varchar(200),
    in _celular varchar(20),
    IN _id_estado_civil INT,
    IN _id_nivel_socio INT,
    IN _id_tipo_doc INT,
    IN _codigo varchar(50),
    IN _id_distrito INT,
    IN _direccion varchar(400) 
)
BEGIN
    INSERT INTO Persona (nombres, apellidos, fecha_nac, correo,celular, id_estado_civil, id_nivel_socio, id_tipo_doc,codigo, id_distrito,direccion)
    VALUES (_nombres, _apellidos, _fecha_nac,_correo,_celular, _id_estado_civil, _id_nivel_socio, _id_tipo_doc,_codigo, _id_distrito,_direccion);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_persona(
    IN _id_persona INT,
    IN _nombres VARCHAR(100),
    IN _apellidos VARCHAR(100),
    IN _fecha_nac DATE,
    in _correo varchar(200),
    in _celular varchar(20),
    IN _id_estado_civil INT,
    IN _id_nivel_socio INT,
    IN _id_tipo_doc INT,
     IN _codigo varchar(50),
    IN _id_distrito INT,
    IN _direccion varchar(400)
)
BEGIN
    UPDATE Persona
    SET nombres = _nombres,
        apellidos = _apellidos,
        fecha_nac = _fecha_nac,
        correo=_correo,
        celular=_celular,
        id_estado_civil = _id_estado_civil,
        id_nivel_socio = _id_nivel_socio,
        id_tipo_doc = _id_tipo_doc,
        codigo=_codigo,
        id_distrito = _id_distrito,
        direccion=_direccion
    WHERE id_persona = _id_persona;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_persona(IN _id_persona INT)
BEGIN
    DELETE FROM Persona WHERE id_persona = _id_persona;
END;
//
DELIMITER ;
-- USUARIO

delimiter //
create procedure insertar_usuario(
in _passwoard varchar(50),
in _tipo_usuario varchar(50),
in _id_persona int
)
begin 
insert into usuario(passwoard,tipo_usuario,id_persona) values
(_passwoard,_tipo_usuario,_id_persona);
end //
delimiter ;

delimiter //
create procedure actualizar_usuario(
in _id_usuario int,
in _passwoard varchar(50),
in _tipo_usuario varchar(50),
in _id_persona int
)
begin
update usuario
set passwoard=_passwoard,
tipo_usuario=_tipo_usuario,
id_persona=_id_persona
where id_usuario=_id_usuario;
end //
delimiter ;

delimiter //
create procedure eliminar_usuario
(
in _id_usuario int
)
begin
delete from usuario
where id_usuario=_id_usuario;
end //
delimiter ;

-- VENDEDOR 
DELIMITER //
CREATE PROCEDURE insertar_vendedor(
    IN _id_usuario INT,
    IN _codigo_vendedor VARCHAR(50),
    IN _fecha_ingreso DATE,
    IN _id_EstadoVendedor INT
)
BEGIN
    INSERT INTO Vendedor (id_usuario, codigo_vendedor, fecha_ingreso, id_EstadoVendedor)
    VALUES (_id_usuario, _codigo_vendedor, _fecha_ingreso, _id_EstadoVendedor);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_vendedor(
    IN _id_vendedor INT,
    IN _id_usuario INT,
    IN _codigo_vendedor VARCHAR(50),
    IN _fecha_ingreso DATE,
    IN _id_EstadoVendedor INT
)
BEGIN
    UPDATE Vendedor
    SET id_usuario = _id_usuario,
        codigo_vendedor = _codigo_vendedor,
        fecha_ingreso = _fecha_ingreso,
        id_EstadoVendedor = _id_EstadoVendedor
    WHERE id_vendedor = _id_vendedor;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_vendedor(IN _id_vendedor INT)
BEGIN
    DELETE FROM Vendedor WHERE id_vendedor = _id_vendedor;
END;
//
DELIMITER ;


-- CLIENTE
DELIMITER //
CREATE PROCEDURE insertar_cliente(
    IN _id_usuario INT,
    IN _id_estado_cliente INT
)
BEGIN
    INSERT INTO Cliente (id_usuario, id_estado_cliente)
    VALUES (_id_usuario, _id_estado_cliente);
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE actualizar_cliente(
    IN _id_cliente INT,
    IN _id_usuario INT,
    IN _id_estado_cliente INT
)
BEGIN
    UPDATE Cliente
    SET id_usuario = _id_usuario,
        id_estado_cliente = _id_estado_cliente
    WHERE id_cliente = _id_cliente;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE eliminar_cliente(IN _id_cliente INT)
BEGIN
    DELETE FROM Cliente WHERE id_cliente = _id_cliente;
END;
//
DELIMITER ;

-- PRODUCTO
DELIMITER //
CREATE PROCEDURE InsertarProducto (
    IN p_nombre VARCHAR(100),
    IN p_descripcion TEXT,
    in p_imagen  varchar(500),
    IN p_id_categoria INT,
    IN p_id_vendedor INT,
    IN p_precio_unitario DECIMAL(10,2),
    IN p_id_estado_producto INT
)
BEGIN
    INSERT INTO Producto (
        nombre, descripcion,imagen, id_categoria, id_vendedor, precio_unitario, id_estado_producto
    ) VALUES (
        p_nombre, p_descripcion,p_imagen, p_id_categoria, p_id_vendedor, p_precio_unitario, p_id_estado_producto
    );
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE ActualizarProducto (
    IN p_id_producto INT,
    IN p_nombre VARCHAR(100),
    IN p_descripcion TEXT,
	in p_imagen  varchar(500),
    IN p_id_categoria INT,
    IN p_id_vendedor INT,
    IN p_precio_unitario DECIMAL(10,2),
    IN p_id_estado_producto INT
)
BEGIN
    UPDATE Producto
    SET nombre = p_nombre,
        descripcion = p_descripcion,
        imagen=p_imagen,
        id_categoria = p_id_categoria,
        id_vendedor = p_id_vendedor,
        precio_unitario = p_precio_unitario,
        id_estado_producto = p_id_estado_producto
    WHERE id_producto = p_id_producto;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE EliminarProducto (
    IN p_id_producto INT
)
BEGIN
    DELETE FROM Producto WHERE id_producto = p_id_producto;
END;
//
DELIMITER ;

-- MOVIMIENTO STOCK

DELIMITER //
CREATE PROCEDURE RegistrarMovimientoStock (
    IN p_id_producto INT,
    IN p_tipo_mov ENUM('entrada','salida'),
    IN p_cantidad INT,
    IN p_observacion VARCHAR(255)
)
BEGIN
    DECLARE v_stock_actual INT;

    -- Calcular el stock actual
    SELECT IFNULL(SUM(
        CASE tipo_mov
            WHEN 'entrada' THEN cantidad
            WHEN 'salida' THEN -cantidad
        END
    ), 0) INTO v_stock_actual
    FROM MovimientoStock
    WHERE id_producto = p_id_producto;

    -- Verificar si hay suficiente stock para una salida
    IF p_tipo_mov = 'salida' AND v_stock_actual < p_cantidad THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Stock insuficiente para realizar la salida';
    ELSE
        -- Registrar el movimiento
        INSERT INTO MovimientoStock (
            id_producto, tipo_mov, cantidad, observacion
        ) VALUES (
            p_id_producto, p_tipo_mov, p_cantidad, p_observacion
        );
    END IF;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE ActualizarMovimientoStock (
    IN p_id_movimiento INT,
    IN p_id_producto INT,
    IN p_tipo_mov ENUM('entrada','salida'),
    IN p_cantidad INT,
    IN p_observacion VARCHAR(255)
)
BEGIN
    DECLARE v_stock_actual INT;
    DECLARE v_cantidad_anterior INT;
    DECLARE v_tipo_mov_anterior ENUM('entrada','salida');

    -- Obtener el movimiento anterior
    SELECT cantidad, tipo_mov INTO v_cantidad_anterior, v_tipo_mov_anterior
    FROM MovimientoStock
    WHERE id_movimiento = p_id_movimiento;

    -- Calcular el stock actual sin considerar el movimiento anterior
    SELECT IFNULL(SUM(
        CASE tipo_mov
            WHEN 'entrada' THEN cantidad
            WHEN 'salida' THEN -cantidad
        END
    ), 0) - 
    (CASE v_tipo_mov_anterior
        WHEN 'entrada' THEN v_cantidad_anterior
        WHEN 'salida' THEN -v_cantidad_anterior
    END) INTO v_stock_actual
    FROM MovimientoStock
    WHERE id_producto = p_id_producto;

    -- Verificar si hay suficiente stock para la nueva salida
    IF p_tipo_mov = 'salida' AND v_stock_actual < p_cantidad THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Stock insuficiente para realizar la actualización';
    ELSE
        -- Actualizar el movimiento
        UPDATE MovimientoStock
        SET id_producto = p_id_producto,
            tipo_mov = p_tipo_mov,
            cantidad = p_cantidad,
            observacion = p_observacion
        WHERE id_movimiento = p_id_movimiento;
    END IF;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE EliminarMovimientoStock (
    IN p_id_movimiento INT
)
BEGIN
    DECLARE v_id_producto INT;
    DECLARE v_cantidad INT;
    DECLARE v_tipo_mov ENUM('entrada','salida');
    DECLARE v_stock_actual INT;

    -- Obtener los detalles del movimiento a eliminar
    SELECT id_producto, cantidad, tipo_mov INTO v_id_producto, v_cantidad, v_tipo_mov
    FROM MovimientoStock
    WHERE id_movimiento = p_id_movimiento;

    -- Calcular el stock actual sin considerar el movimiento a eliminar
    SELECT IFNULL(SUM(
        CASE tipo_mov
            WHEN 'entrada' THEN cantidad
            WHEN 'salida' THEN -cantidad
        END
    ), 0) - 
    (CASE v_tipo_mov
        WHEN 'entrada' THEN v_cantidad
        WHEN 'salida' THEN -v_cantidad
    END) INTO v_stock_actual
    FROM MovimientoStock
    WHERE id_producto = v_id_producto;

    -- Verificar si la eliminación resulta en stock negativo
    IF v_stock_actual < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'No se puede eliminar el movimiento, resultaría en stock negativo';
    ELSE
        -- Eliminar el movimiento
        DELETE FROM MovimientoStock WHERE id_movimiento = p_id_movimiento;
    END IF;
END;
//
DELIMITER ;

-- venta 
DELIMITER //
CREATE PROCEDURE InsertarVenta (
    IN p_id_tipo_comprobante INT,
    IN p_id_cliente INT,
    IN p_id_vendedor INT
)
BEGIN
    INSERT INTO Venta (
        id_tipo_comprobante,
        id_cliente,
        id_vendedor
    ) VALUES (
        p_id_tipo_comprobante,
        p_id_cliente,
        p_id_vendedor
    );
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE ActualizarVenta (
    IN p_id_venta INT,
    IN p_id_tipo_comprobante INT,
    IN p_id_cliente INT,
    IN p_id_vendedor INT
)
BEGIN
    UPDATE Venta
    SET id_tipo_comprobante = p_id_tipo_comprobante,
        id_cliente = p_id_cliente,
        id_vendedor = p_id_vendedor
    WHERE id_venta = p_id_venta;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE EliminarVenta (
    IN p_id_venta INT
)
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE v_id_producto INT;
    DECLARE v_cantidad INT;
    DECLARE cur CURSOR FOR
        SELECT id_producto, cantidad FROM VentaLinea WHERE id_venta = p_id_venta;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO v_id_producto, v_cantidad;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Revertir movimiento de stock
        INSERT INTO MovimientoStock (
            id_producto,
            tipo_mov,
            cantidad,
            observacion
        ) VALUES (
            v_id_producto,
            'entrada',
            v_cantidad,
            CONCAT('Reversión de venta ID: ', p_id_venta)
        );
    END LOOP;
    CLOSE cur;

    -- Eliminar líneas de venta
    DELETE FROM VentaLinea WHERE id_venta = p_id_venta;

    -- Eliminar venta
    DELETE FROM Venta WHERE id_venta = p_id_venta;
END;
//
DELIMITER ;

-- ventas lineas
DELIMITER //
CREATE PROCEDURE InsertarVentaLinea (
    IN p_id_venta INT,
    IN p_id_producto INT,
    IN p_cantidad INT
)
BEGIN
    DECLARE v_stock_actual INT;

    -- Verificar stock disponible
    SELECT IFNULL(SUM(
        CASE tipo_mov
            WHEN 'entrada' THEN cantidad
            WHEN 'salida' THEN -cantidad
        END
    ), 0) INTO v_stock_actual
    FROM MovimientoStock
    WHERE id_producto = p_id_producto;

    IF v_stock_actual < p_cantidad THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Stock insuficiente para realizar la venta';
    ELSE
        -- Insertar línea de venta
        INSERT INTO VentaLinea (
            id_venta,
            id_producto,
            cantidad
        ) VALUES (
            p_id_venta,
            p_id_producto,
            p_cantidad
        );

        -- Registrar movimiento de stock
        INSERT INTO MovimientoStock (
            id_producto,
            tipo_mov,
            cantidad,
            observacion
        ) VALUES (
            p_id_producto,
            'salida',
            p_cantidad,
            CONCAT('Venta ID: ', p_id_venta)
        );
    END IF;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE ActualizarVentaLinea (
    IN p_id_venta INT,
    IN p_id_producto INT,
    IN p_nueva_cantidad INT
)
BEGIN
    DECLARE v_cantidad_actual INT;
    DECLARE v_diferencia INT;
    DECLARE v_stock_actual INT;

    -- Obtener cantidad actual
    SELECT cantidad INTO v_cantidad_actual
    FROM VentaLinea
    WHERE id_venta = p_id_venta AND id_producto = p_id_producto;

    SET v_diferencia = p_nueva_cantidad - v_cantidad_actual;

    -- Verificar stock si se aumenta la cantidad
    IF v_diferencia > 0 THEN
        SELECT IFNULL(SUM(
            CASE tipo_mov
                WHEN 'entrada' THEN cantidad
                WHEN 'salida' THEN -cantidad
            END
        ), 0) INTO v_stock_actual
        FROM MovimientoStock
        WHERE id_producto = p_id_producto;

        IF v_stock_actual < v_diferencia THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Stock insuficiente para aumentar la cantidad';
        END IF;
    END IF;

    -- Actualizar línea de venta
    UPDATE VentaLinea
    SET cantidad = p_nueva_cantidad
    WHERE id_venta = p_id_venta AND id_producto = p_id_producto;

    -- Ajustar movimiento de stock
    IF v_diferencia != 0 THEN
        INSERT INTO MovimientoStock (
            id_producto,
            tipo_mov,
            cantidad,
            observacion
        ) VALUES (
            p_id_producto,
            IF(v_diferencia > 0, 'salida', 'entrada'),
            ABS(v_diferencia),
            CONCAT('Ajuste de venta ID: ', p_id_venta)
        );
    END IF;
END;
//
DELIMITER ;

DELIMITER $$

CREATE PROCEDURE EliminarVentaLinea(IN venta_id INT)
BEGIN
    -- Eliminar las líneas de la venta
    DELETE FROM VentaLinea
    WHERE id_venta = venta_id;
    
    -- Eliminar la venta
    DELETE FROM Venta
    WHERE id_venta = venta_id;
    
END $$

DELIMITER ;
