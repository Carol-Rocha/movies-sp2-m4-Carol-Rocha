-- criação de movies
INSERT INTO movies (name, category, duration, price)
VALUES ('os vingadores', 'ação', 70, 19),
('hededitário', 'terror', 75, 20),
('after', 'romance', 60, 3),
('A queda', 'suspense', 75, 25);

-- listagem de todos os movies
SELECT * FROM movies;

-- listagem de um movie filtrando pelo id
SELECT * FROM movies 
WHERE id > 2;

-- deleção de um movie através do id
DELETE FROM movies
WHERE id = 3;
