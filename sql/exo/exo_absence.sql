CREATE DATABASE absence;
USE absence;
CREATE TABLE employe(
	id_employe INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    age INT,
    telephone INT,
    nom_rue INT,
    num_rue INT,
    code_postal INT,
    ville VARCHAR(50),
    id_poste INT
    );
    
CREATE TABLE absence(
	id_absence INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	date_debut DATETIME,
	date_fin DATETIME,
	id_motif INT,
	id_employe INT
);

CREATE TABLE motif(
	id_motif INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	motif VARCHAR(50)
);

CREATE TABLE poste(
	id_poste INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	poste VARCHAR(50)
);

CREATE TABLE utilisateur(
	id_utilisateur INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	nom VARCHAR(50),
	prenom VARCHAR(50),
	email VARCHAR(50),
	mdp VARCHAR(100),
	id_role INT
);

CREATE TABLE `role`(
	id_role INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	nom_role VARCHAR(50)
);

ALTER TABLE absence
	ADD CONSTRAINT fk_id_motif_id_employe 
    FOREIGN KEY (id_motif) REFERENCES motif (id_motif);
    
ALTER TABLE absence
	ADD CONSTRAINT fk_id_employe
    FOREIGN KEY (id_employe) REFERENCES employe (id_employe);
    
ALTER TABLE absence
	ADD COLUMN intitule VARCHAR(240) NOT NULL;
    
ALTER TABLE absence
	ADD COLUMN accepte TINYINT(1) DEFAULT(1);
    
ALTER TABLE absence
	CHANGE date_debut date_debut DATE NOT NULL;
    
ALTER TABLE absence
	DROP intitule;
 
ALTER TABLE absence
	DROP FOREIGN KEY fk_id_employe;
DROP TABLE employe;