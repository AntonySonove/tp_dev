CREATE DATABASE competition;
USE competition;
CREATE TABLE joueur(
	id_joueur INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nom_joueur VARCHAR(50),
    prenom_joueur VARCHAR(50),
    id_poste INT,
    id_equipe INT
    )Engine=InnoDB;
CREATE TABLE poste(
	id_poste INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	nom_poste VARCHAR(50)
    )Engine=InnoDB;
CREATE TABLE equipe(
	id_equipe INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nom_equipe VARCHAR(50) NOT NULL,
    id_club INT NOT NULL
    )Engine=InnoDB;
CREATE TABLE club(
	id_club INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nom_club VARCHAR(50) NOT NULL,
    id_adresse INT NOT NULL
    )Engine=InnoDB;
CREATE TABLE adresse(
	id_adresse INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nom_rue VARCHAR(50),
    num_rue INT,
    code_postal INT,
    ville VARCHAR(50)
    )Engine=InnoDB;
 CREATE TABLE lieu(
	id_lieu INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nom_lieu VARCHAR(50) NOT NULL,
    id_adresse INT NOT NULL
    )Engine=InnoDB;
CREATE TABLE localiser(
	id_competition INT,
    id_lieu INT
    )Engine=InnoDB;
ALTER TABLE localiser
	ADD PRIMARY KEY (id_competition, id_lieu);
CREATE TABLE competition(
	id_competition INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nom_competition VARCHAR(50),
    date_debut DATETIME,
    date_fin DATETIME
    )Engine=InnoDB;
 CREATE TABLE partie(
	id_partie INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    date_partie DATETIME NOT NULL,
    score_equipe1 INT NOT NULL,
    score_equipe2 INT NOT NULL,
    id_equipe1 INT NOT NULL,
    id_equipe2 INT NOT NULL,
    id_competition INT NOT NULL,
    id_phase INT NOT NULL
    )Engine=InnoDB;
 CREATE TABLE `phase`(
	id_phase INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nom_phase VARCHAR(50)
    )Engine=InnoDB;
    
ALTER TABLE joueur
	ADD CONSTRAINT fk_poste
    FOREIGN KEY (id_poste) REFERENCES poste (id_poste);
ALTER TABLE joueur
	ADD CONSTRAINT fk_equipe
    FOREIGN KEY (id_equipe) REFERENCES equipe (id_equipe);
ALTER TABLE equipe
	ADD CONSTRAINT fk_club
    FOREIGN KEY (id_club) REFERENCES club (id_club);
ALTER TABLE club
	ADD CONSTRAINT fk_adresse
    FOREIGN KEY (id_adresse) REFERENCES adresse (id_adresse);
ALTER TABLE lieu
	ADD CONSTRAINT fk_adresse_lieu
    FOREIGN KEY (id_adresse) REFERENCES adresse (id_adresse);
ALTER TABLE localiser
	ADD CONSTRAINT fk_competition
    FOREIGN KEY (id_competition) REFERENCES competition (id_competition);
ALTER TABLE partie
	ADD CONSTRAINT fk_competition_partie
    FOREIGN KEY (id_competition) REFERENCES competition (id_competition);
ALTER TABLE partie
	ADD CONSTRAINT fk_phase
    FOREIGN KEY (id_phase) REFERENCES `phase` (id_phase);
ALTER TABLE partie
	ADD CONSTRAINT fk_equipe1
    FOREIGN KEY (id_equipe1) REFERENCES equipe (id_equipe);
ALTER TABLE partie
	ADD CONSTRAINT fk_equipe2
    FOREIGN KEY (id_equipe2) REFERENCES equipe (id_equipe);
    
ALTER TABLE partie
	ADD CONSTRAINT chk_score
    CHECK (score_equipe1 >=1);
ALTER TABLE partie
	ADD CONSTRAINT chk_score2
    CHECK (score_equipe2 >=1);
ALTER TABLE equipe
	ADD CONSTRAINT chk_nom_equipe
    CHECK (CHAR_LENGTH(nom_equipe)<3);
ALTER TABLE adresse
	ADD CONSTRAINT chk_adresse
    CHECK (CHAR_LENGTH(code_postal)=5);
    
INSERT INTO joueur VALUE(1,"Sonove","Antony","attaquant","les bleus");

-- Supprimer un alter
-- ALTER TABLE adresse
	-- DROP CONSTRAINT chk_adresse;