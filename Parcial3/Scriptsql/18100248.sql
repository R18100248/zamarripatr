--PRODUCTOS ALIMENTICIOS, BASE DE DATOS EN SQL SERVER (ROGELIO ZAMARRIPA TREVIÑO - 18100248)
use master
if exists(select * from sysdatabases where name='18100248')
  drop database 18100248
go
create database 18100248
go

--CREACION DE TABLAS DE PRODUCTOS ALIMENTICIOS
use 18100248
create table productosAlimenticios
(
codigo varchar(5) not null,	
nombre varchar(80) not null,
departamento varchar(70) not null,
proveedor varchar(40) not null,
codigoProveedor varchar(6) not null,		--EP-000
precioVenta money not null,
cantProdVendidos smallint not null,
cantProdExistentes smallint not null,
constraint pk_productosAlimenticios primary key (codigo),
constraint ck_productosAlimenticios_departamento check (departamento='Abarrotes' OR departamento='Aceites y mantecas' OR departamento='Alimentos preparados' OR departamento='Arroz, pasta y semillas'
OR departamento='Bebidas' OR departamento='Bebidas alcohólicas' OR departamento='Botanas' OR departamento='Dulcería' OR departamento='Frutas y verduras' OR departamento='Galletas y postres'
OR departamento='Harinas y pan' OR departamento-'Huevos y carnes frías' OR departamento='Lácteos' OR departamento='Pescados y mariscos' OR departamento='Productos congelados y/o refrigerados'
OR departamento='Productos enlatados')
);
go

--INSERCION DE DATOS
--TABLA PRODUCTOSALIMENTICIOS (CODIGO DE PRODUCTO, NOMBRE, DEPARTAMENTO, PROVEEDOR, CODIGO DE PROVEEDOR, PRECIO DE VENTA, CANT. DE PRODUCTOS VENDIDOS Y CANT. DE PROD. EXISTENTES)
insert into productosAlimenticios values ('PR001', 'PAPAS SABRITAS ORIGINAL', 'Botanas', 'SABRITAS', 'EP-023', 13.90, 50, 30)
insert into productosAlimenticios values ('PR002', 'BARRA DE PAN BLANCO BIMBO 680G', 'Harinas y pan', 'GRUPO BIMBO', 'EP-042', 33.50, 40, 10)
insert into productosAlimenticios values ('PR003', 'REFRESCO PEPSI 2 LITROS', 'Bebidas', 'PEPSICO', 'EP-060', 23, 40, 10)
insert into productosAlimenticios values ('PR004', 'ATUN EN HOJUELAS EN AGUA', 'Productos enlatados', 'HERDEZ', 'EP-024', 19.50, 35, 40)
insert into productosAlimenticios values ('PR005', 'LECHE LALA ENTERA 1 LITRO', 'Lácteos', 'GRUPO LALA', 'EP-086', 25.80, 40, 25)
insert into productosAlimenticios values ('PR006', 'CAJA GALLETAS CHOKIS', 'Galletas y postres', 'GRUPO GAMESA', 'EP-083', 32.50, 50, 30)
insert into productosAlimenticios values ('PR007', 'PAQUETE HUEVO BLANCO 30 PIEZAS', 'Huevos y carnes frías', 'VILLA FARMS', 'EP-052', 52.00, 20, 45)
insert into productosAlimenticios values ('PR008', 'PASTILLAS SABOR MENTA 14.5GR', 'Dulcería', 'TIC TAC', 'EP-011', 10.00, 30, 50)

select * from productosAlimenticios
