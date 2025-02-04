-- création de la base de données
CREATE DATABASE If NOT EXISTS produit CHARSET utf8mb4;
USE produit;

-- création des tables
CREATE TABLE IF NOT EXISTS categorie(
    id_categorie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_categorie VARCHAR(50) NOT NULL UNIQUE
)Engine=InnoDB;

CREATE TABLE IF NOT EXISTS vendeur(
    id_vendeur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_vendeur VARCHAR(50) NOT NULL,
    prenom_vendeur VARCHAR(50) NOT NULL
)Engine=InnoDB;

CREATE TABLE IF NOT EXISTS ticket(
id_ticket INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
date_creation DATETIME NOT NULL,
id_vendeur INT NOT NULL
)Engine=InnoDB;

CREATE TABLE IF NOT EXISTS produit(
id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_produit VARCHAR(50) NOT NULL,
`description` VARCHAR(255) NOT NULL,
tarif DECIMAL(3,2) NOT NULL,
id_categorie INT NOT NULL
)Engine=InnoDB;

-- Création de la table d'association
CREATE TABLE IF NOT EXISTS produit_ticket(
    id_ticket INT,
    id_produit INT,
    quantite INT NOT NULL,
    PRIMARY KEY(id_ticket, id_produit),
    CONSTRAINT fk_ticket FOREIGN KEY (id_ticket) REFERENCES ticket(id_ticket),
    CONSTRAINT fk_produit FOREIGN KEY (id_produit) REFERENCES produit(id_produit)
)Engine=InnoDB;

-- Les autres clés étrangères
ALTER TABLE produit 
    ADD CONSTRAINT fk_lier_categorie
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
    ON DELETE CASCADE;
-- si on supprime une catégorie, alors avec ON DELETE CASCADE on va aller supprimer tous les produits de cette catégorie également

ALTER TABLE ticket
    ADD CONSTRAINT fk_vendre_vendeur
    FOREIGN KEY (id_vendeur)
    REFERENCES vendeur(id_vendeur)
    ON DELETE CASCADE;

INSERT INTO categorie (nom_categorie) VALUE 
("fruit"),("legume"),("viande"),("poisson"),("epicerie");

INSERT INTO produit (nom_produit,`description`,tarif,id_categorie) VALUES 
("pomme","gala",0.5,1),
("carotte","des sables",0.1,2),
("côte de boeuf","label rouge",30,3),
("saumon","norvège",6,4),
("curry","madras",1,5),
("banane","martinique",0.99,1),
("pomme de terre","agatha",2.5,2),
("poulet","plein air",7,3),
("truite","msc",3,4),
("farine","bio",.2,5);

INSERT INTO vendeur (nom_vendeur,prenom_vendeur) VALUES
("Dupont","Michel"),
("Durant","Gontrant"),
("Pasdenom","Pasdeprenom"),
("Sonove","Antony"),
("Nomvendeur","Prenomvendeur");

INSERT INTO ticket (date_creation,id_vendeur) VALUES
("2025-01-02 11:30:26",1),
("2025-01-03 09:06:43",3),
("2025-01-04 15:14:56",4);

INSERT INTO produit_ticket (quantite,id_produit,id_ticket) VALUES
(3,1,1),(5,5,1),(8,2,1),
(5,9,2),(9,10,2),(5,4,2),
(19,6,3),(21,7,3),(3,9,3);

UPDATE vendeur
SET nom_vendeur ="Unnom"
WHERE id_vendeur= 3;