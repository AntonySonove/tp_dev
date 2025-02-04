CREATE DATABASE livre;
USE livre;
CREATE TABLE livre(
	id_livre INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	titre VARCHAR(50) NOT NULL,
	`resume` TEXT,
	date_sortie DATE NOT NULL
)Engine=InnoDB; 
CREATE TABLE completer(
	id_livre INT,
	id_genre INT,
	PRIMARY KEY (id_livre, id_genre)
)engine=InnoDB;
CREATE TABLE genre(
	id_genre INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	libele VARCHAR(50) NOT NULL
)engine=InnoDB;

ALTER TABLE completer
	ADD CONSTRAINT fk_livre
    FOREIGN KEY (id_livre) REFERENCES livre (id_livre);
ALTER TABLE completer
	ADD CONSTRAINT fk_genre
    FOREIGN KEY (id_genre) REFERENCES genre (id_genre);

INSERT INTO livre (titre,`resume`,date_sortie) VALUES
("Le Mystère de la Forêt","Un groupe d'amis découvre un secret ancien caché dans une forêt enchantée","2023-01-01"),
("Les secrets de l'Océan","Une jeune biologiste marine explore les profondeurs de l'océan et découvre une civilisation perdue","2023-02-01"),
("L'Enigme du Pharaon","Un archéologue tente de résoudre les mystères d'une ancienne pyramide égyptienne","2023-03-01"),
("La Quête du Chevalier","Un chevalier part en quête pour sauver son royaume d'une menace imminente","2023-04-01"),
("Le voyage Interstellaire","Un équipage spacial part à la recherche de vouvelles planètes et forme de vie","2023-05-01"),
("Les Chroniques du temps","Un scientifique invente une machine à voyager dans le temps et explore differentes époques","2023-06-01"),
("La Cité Perdue","Une équipe d'explorateurs découvre une cité ancienne cachée dans la jungle","2023-07-01"),
("Le Trésor des Pirates","Un jeune garçon trouve une carte au trésor et part à l'aventure pour le trouver","2023-08-01"),
("L'Île Mystérieuse","Un groupe de naufragés découvre une île pleine de mystères et de dangers","2023-09-01"),
("Les Gardiens de la Galaxie","Une équipe de super-héros protège la galaxie contre des menaces interstellaires","2023-10-01");

INSERT INTO genre (libele) VALUES ("fantastique"),("science_fiction"),("polar"),("drame"),("roman");

INSERT INTO completer (id_livre, id_genre) VALUES(1,1),(1,5),(2,1),(2,5),(3,1),(3,5),(4,1),(4,5),(5,2),(5,5),(6,2),(6,5),(7,1),(7,5),(8,4),(8,5),(9,2),(9,5),(10,3),(10,5);

-- BONUS
-- Modifier la colonne titre (table livre), la passer en unique
ALTER TABLE livre
	MODIFY COLUMN titre VARCHAR(50) UNIQUE NOT NULL;
    
-- Test d'ajout d'un livre existant
INSERT INTO livre(titre, `resume`, date_sortie)
VALUES('Le Mystère de la Forêt', 
'Un groupe d\'amis découvre un secret ancien caché dans une forêt enchantée.',
'2023-01-01');
-- on a une erreur de type Duplicate entry

-- Modifier la colonne libele (table genre), la passer en unique
ALTER TABLE genre
	MODIFY COLUMN libele VARCHAR(50) UNIQUE NOT NULL;
    
-- Ajouter une table auteur qui va contenir : id, nom, prénom
CREATE TABLE IF NOT EXISTS auteur(
	id_auteur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL
)Engine=InnoDB;

-- Ajouter une colonne id_auteur (table livre) 
ALTER TABLE livre
	ADD COLUMN id_auteur INT;
    
-- et sa clé étrangère
ALTER TABLE livre
	ADD CONSTRAINT fk_rediger_auteur
    FOREIGN KEY (id_auteur)
    REFERENCES auteur(id_auteur);

-- Créer 5 enregistrements dans la table auteur
INSERT INTO auteur(prenom, nom)
VALUES('Victor', 'Hugo'), ('Jane', 'Austen'),('Gabriel', 'Garcia Marquez'),('Agatha','Christie'),('J.K.','Rowling');

-- Créer 5 enregistrements dans la table livre qui inclus une référence à l'auteur (valeur de la clé primaire id_auteur)
INSERT INTO livre (titre, `resume`, date_sortie, id_auteur)
VALUES ('Le Château Hanté','Un détective enquête sur des phénomènes paranormaux dans un château hanté.', '2024-04-01', 1), 
('Les Aventuriers de l\'Espace','Un groupe d\'astronautes explore des planètes inconnues et rencontre des extraterrestres.','2024-05-01',2),
('Le Secret de l\'Alchimiste','Un jeune apprenti découvre les secrets de l\'alchimie et part en quête de la pierre philosophale.','2024-06-01',3),
('La Légende du Roi Arthur','Les aventures du roi Arthur et des chevaliers de la Table Ronde.','2024-07-01',2),
('Le Monde des Rêves','Un enfant découvre un monde magique où les rêves deviennent réalité.','2024-08-01',5);


ALTER TABLE auteur
	CHANGE pernom prenom VARCHAR(50) NOT NULL;
    
DELETE FROM livre
WHERE id_livre =10;

DROP DATABASE livre;