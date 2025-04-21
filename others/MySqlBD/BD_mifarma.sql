CREATE DATABASE MiFarma;
use MiFarma;

CREATE TABLE Pais (
  id_pais      INT         AUTO_INCREMENT PRIMARY KEY,
  Pais       VARCHAR(100) NOT NULL,
  CONSTRAINT Pais_uk unique(Pais)
) ENGINE=InnoDB;

CREATE TABLE Departamento (
  id_departamento INT         AUTO_INCREMENT PRIMARY KEY,
  Departamento          VARCHAR(100) NOT NULL,
  id_pais         INT         NOT NULL,
  FOREIGN KEY (id_pais) REFERENCES Pais(id_pais),
  CONSTRAINT Departamento_uk unique(Departamento)
) ENGINE=InnoDB;

CREATE TABLE Provincia (
  id_provincia    INT         AUTO_INCREMENT PRIMARY KEY,
  Provincia          VARCHAR(100) NOT NULL,
  id_departamento INT         NOT NULL,
  FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento),
   CONSTRAINT Provincia_uk unique(Provincia)
) ENGINE=InnoDB;

CREATE TABLE Distrito (
  id_distrito   INT         AUTO_INCREMENT PRIMARY KEY,
  Distrito        VARCHAR(100) NOT NULL,
  id_provincia  INT         NOT NULL,
  FOREIGN KEY (id_provincia) REFERENCES Provincia(id_provincia)
) ENGINE=InnoDB;


CREATE TABLE EstadoCivil (
  id_estado_civil INT         AUTO_INCREMENT PRIMARY KEY,
  EstadoCivil     VARCHAR(50) NOT NULL,
  CONSTRAINT EstadoCivil_uk UNIQUE(EstadoCivil)
) ENGINE=InnoDB;

CREATE TABLE NivelSocioeco (
  id_nivel_socio  INT         AUTO_INCREMENT PRIMARY KEY,
  NivelSocioeco     VARCHAR(50) NOT NULL,
  CONSTRAINT NivelSocioeco_UK UNIQUE(NivelSocioeco)
) ENGINE=InnoDB;

CREATE TABLE TipoDocumento (
  id_tipo_doc  INT         AUTO_INCREMENT PRIMARY KEY,
  tipo         VARCHAR(50) NOT NULL,
  CONSTRAINT tipo_uk UNIQUE(tipo)
) ENGINE=InnoDB;

CREATE TABLE TipoComprobante (
  id_tipo_comprobante INT         AUTO_INCREMENT PRIMARY KEY,
  TipoComprobante         VARCHAR(50) NOT NULL,
  CONSTRAINT TipoComprobante_uk UNIQUE(TipoComprobante)
) ENGINE=InnoDB;

CREATE TABLE Categoria (
  id_categoria INT         AUTO_INCREMENT PRIMARY KEY,
  Categoria  VARCHAR(50) NOT NULL,
   CONSTRAINT Categoria_uk UNIQUE(Categoria)
) ENGINE=InnoDB;

CREATE TABLE EstadoProducto (
  id_estado_producto INT         AUTO_INCREMENT PRIMARY KEY,
  EstadoProducto        VARCHAR(50) NOT NULL,
  CONSTRAINT EstadoProducto_uk UNIQUE(EstadoProducto)
) ENGINE=InnoDB;

CREATE TABLE EstadoCliente (
  id_estado_cliente INT         AUTO_INCREMENT PRIMARY KEY,
  EstadoCliente       VARCHAR(50) NOT NULL,
  CONSTRAINT EstadoCliente_uk UNIQUE(EstadoCliente)
) ENGINE=InnoDB;

CREATE TABLE EstadoVendedor (
  id_EstadoVendedor INT         AUTO_INCREMENT PRIMARY KEY,
  EstadoVendedor       VARCHAR(50) NOT NULL,
  CONSTRAINT EstadoVendedor_uk UNIQUE(EstadoVendedor)
) ENGINE=InnoDB;



CREATE TABLE Persona (
  id_persona         INT         AUTO_INCREMENT PRIMARY KEY,
  nombres            VARCHAR(100) NOT NULL,
  apellidos          VARCHAR(100) NOT NULL,
  fecha_nac          DATE        NOT NULL,
  correo varchar(200) null,
  celular varchar(20) null,
  id_estado_civil    INT         NOT NULL,
  id_nivel_socio     INT         NOT NULL,
  id_tipo_doc        INT         NOT NULL,
  codigo             varchar(50) not null,
  fecha_registro          datetime   DEFAULT CURRENT_TIMESTAMP ,
  id_distrito        INT         NULL,
  direccion varchar(400) not null,
  FOREIGN KEY (id_estado_civil) REFERENCES EstadoCivil(id_estado_civil),
  FOREIGN KEY (id_nivel_socio)  REFERENCES NivelSocioeco(id_nivel_socio),
  FOREIGN KEY (id_tipo_doc)     REFERENCES TipoDocumento(id_tipo_doc),
  FOREIGN KEY (id_distrito)     REFERENCES Distrito(id_distrito),
  constraint codigo_uk unique(codigo)
) ENGINE=InnoDB;

create table usuario(
id_usuario int auto_increment primary key,
passwoard varchar(50) not null,
tipo_usuario varchar(50) not null,
id_persona int,
constraint usuario_pk foreign key(id_persona) references Persona(id_persona)
);

CREATE TABLE Vendedor (
  id_vendedor    INT         AUTO_INCREMENT PRIMARY KEY,
  id_usuario     INT         NOT NULL,
  codigo_vendedor VARCHAR(50) NOT NULL,
  fecha_ingreso  DATE        NOT NULL,
  id_EstadoVendedor INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
) ENGINE=InnoDB;

CREATE TABLE Cliente (
  id_cliente          INT         AUTO_INCREMENT PRIMARY KEY,
  id_usuario          INT         NOT NULL,
  id_estado_cliente   INT         NOT NULL,
  FOREIGN KEY (id_usuario)        REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_estado_cliente) REFERENCES EstadoCliente(id_estado_cliente)
) ENGINE=InnoDB;



CREATE TABLE Producto (
  id_producto       INT         AUTO_INCREMENT PRIMARY KEY,
  nombre            VARCHAR(100) NOT NULL,
  imagen            varchar(500) null,
  descripcion       TEXT        NULL,
  id_categoria      INT         NOT NULL,
  id_vendedor       INT         NOT NULL,
  precio_unitario   DECIMAL(10,2) NOT NULL,
  id_estado_producto INT        NOT NULL,
  FOREIGN KEY (id_categoria)       REFERENCES Categoria(id_categoria),
  FOREIGN KEY (id_vendedor)        REFERENCES Vendedor(id_vendedor),
  FOREIGN KEY (id_estado_producto) REFERENCES EstadoProducto(id_estado_producto)
) ENGINE=InnoDB;


CREATE TABLE MovimientoStock (
  id_movimiento  INT         AUTO_INCREMENT PRIMARY KEY,
  id_producto    INT         NOT NULL,
  tipo_mov       ENUM('entrada','salida') NOT NULL,
  cantidad       INT         NOT NULL,
  fecha          DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  observacion    VARCHAR(255) NULL,
  FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
) ENGINE=InnoDB;


-- 5. Ventas y líneas de venta
CREATE TABLE Venta (
  id_venta           INT         AUTO_INCREMENT PRIMARY KEY,
  fecha_emision      DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  id_tipo_comprobante INT        NOT NULL,
  id_cliente         INT         NOT NULL,
  id_vendedor        INT         NOT NULL,
  FOREIGN KEY (id_tipo_comprobante) REFERENCES TipoComprobante(id_tipo_comprobante),
  FOREIGN KEY (id_cliente)          REFERENCES Cliente(id_cliente),
  FOREIGN KEY (id_vendedor)         REFERENCES Vendedor(id_vendedor)
) ENGINE=InnoDB;

CREATE TABLE VentaLinea (
  id_VentaLinea int auto_increment primary key  not null,
  id_venta          INT     NOT NULL,
  id_producto       INT     NOT NULL,
  cantidad          INT     NOT NULL,
  FOREIGN KEY (id_venta)    REFERENCES Venta(id_venta),
  FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
) ENGINE=InnoDB;

