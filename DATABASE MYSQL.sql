use Restaurante; 
 
CREATE TABLE Categorias ( 
    id_categoria INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL, 
    descripcion TEXT, 
    encargado VARCHAR(100) 
); 
 
INSERT INTO Categorias (nombre, descripcion, encargado) VALUES 
('Entradas', 'Platos ligeros para comenzar la comida', 'María López'), 
('Plato fuerte', 'Comidas principales del menú', 'Carlos Ruiz'), 
('Postres', 'Dulces y platos de cierre', 'Andrea Torres'), 
('Bebidas', 'Bebidas frías y calientes', 'Luis Mendoza'), 
('Vegetariano', 'Platos sin productos animales', 'Laura Pérez'), 
('Mariscos', 'Platos elaborados con mariscos', 'Sofía Ríos'), 
('Carnes', 'Platos con carne de res, cerdo o pollo', 'Pedro García'), 
('Internacional', 'Platos de cocina extranjera', 'Ana Gómez'), 
('Infantil', 'Platos para niños', 'Miguel Torres'), 
('Desayunos', 'Platos servidos por la mañana', 'Claudia Romero'); 
 
select * from categorias 
 
CREATE TABLE Platos ( 
    id_plato INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL, 
    descripcion TEXT, 
    nivel_dificultad ENUM('Fácil', 'Media', 'Difícil') NOT NULL, 
    foto VARCHAR(255), 
    precio DECIMAL(10,2) NOT NULL, 
    id_categoria INT, 
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria) 
        ON DELETE SET NULL ON UPDATE CASCADE 
); 
INSERT INTO Platos (nombre, descripcion, nivel_dificultad, foto, precio, id_categoria) VALUES 
('Sopa de tortilla', 'Sopa tradicional mexicana con tiras de tortilla', 'Media', 'sopa_tortilla.jpg', 70.00, 1), 
('Hamburguesa clásica', 'Hamburguesa con carne, lechuga y tomate', 'Fácil', 'hamburguesa.jpg', 90.00, 2), 
('Ensalada César', 'Ensalada con pollo, lechuga y aderezo césar', 'Fácil', 'ensalada_cesar.jpg', 65.00, 1), 
('Tacos al pastor', 'Tacos de cerdo con piña y cebolla', 'Media', 'tacos_pastor.jpg', 80.00, 2), 
('Pastel de chocolate', 'Postre de chocolate suave y esponjoso', 'Media', 'pastel_chocolate.jpg', 60.00, 3), 
('Agua de jamaica', 'Bebida refrescante de flor de jamaica', 'Fácil', 'agua_jamaica.jpg', 20.00, 4), 
('Pizza margarita', 'Pizza italiana con queso mozzarella y tomate', 'Difícil', 'pizza.jpg', 100.00, 8), 
('Hotcakes', 'Panqueques servidos con miel y mantequilla', 'Fácil', 'hotcakes.jpg', 50.00, 10), 
('Tarta de limón', 'Postre frío con sabor a limón', 'Media', 'tarta_limon.jpg', 55.00, 3), 
('Tofu con vegetales', 'Salteado de tofu con verduras frescas', 'Media', 'tofu.jpg', 75.00, 5); 
 
select * from Platos
 
CREATE TABLE Ingredientes ( 
    id_ingrediente INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL, 
    unidad_medida VARCHAR(50), 
    cantidad_almacen DECIMAL(10,2) 
); 
 
INSERT INTO Ingredientes ((nombre, unidad_medida, cantidad_almacen) VALUES 
('Tortilla de maíz', 'unidades', 200), 
('Carne de res', 'kg', 10), 
('Lechuga', 'kg', 5), 
('Tomate', 'kg', 8), 
('Queso mozzarella', 'kg', 6), 
('Harina de trigo', 'kg', 12), 
('Pollo', 'kg', 7), 
('Flor de jamaica', 'kg', 2), 
('Chocolate', 'kg', 3), 
('Tofu', 'kg', 4), 
 );
select * from ingredientes 
 
CREATE TABLE Recetas ( 
    id_plato INT, 
    id_ingrediente INT, 
    cantidad DECIMAL(10,2), 
    PRIMARY KEY (id_plato, id_ingrediente), 
    FOREIGN KEY (id_plato) REFERENCES Platos(id_plato) 
        ON DELETE CASCADE ON UPDATE CASCADE, 
    FOREIGN KEY (id_ingrediente) REFERENCES Ingredientes(id_ingrediente) 
        ON DELETE CASCADE ON UPDATE CASCADE
); 
 
INSERT INTO Recetas (id_plato, id_ingrediente, cantidad) VALUES 
(1, 1, 2.00), 
(2, 2, 0.25), 
(2, 3, 0.10), 
(3, 3, 0.15), 
(3, 7, 0.20), 
(4, 2, 0.30), 
(5, 9, 0.25), 
(6, 8, 0.10), 
(7, 5, 0.25), 
(10, 10, 0.30); 
 
select * from Recetas
