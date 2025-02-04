CREATE DATABASE photo;
USE photo;
CREATE TABLE photo(
	id_photo INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	name_photo VARCHAR(50) NOT NULL,
	url_photo VARCHAR(50)NOT NULL,
	id_lieux INT
);
CREATE TABLE lieux(
	id_lieu INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	name_lieu VARCHAR(50),
	town_lieu VARCHAR(50),
	country_lieu VARCHAR(50)
);
CREATE TABLE personne(
	id_personne INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	lastname_personne VARCHAR(50),
	firstname_personne VARCHAR(50)
);
CREATE TABLE derouler(
	id_photo INT,
	id_personne INT
);
ALTER TABLE derouler
	ADD PRIMARY KEY (id_personne, id_photo);
    
ALTER TABLE photo
	ADD CONSTRAINT fk_lieu_photo 
    FOREIGN KEY (id_lieu) REFERENCES lieux (id_lieu);
    
ALTER TABLE photo
	ADD CONSTRAINT fk_photo
    FOREIGN KEY (id_photo) REFERENCES photo(id_photo);
    
ALTER TABLE personne
	MODIFY firstname_personne VARCHAR(100) NOT NULL;
    
ALTER TABLE photo
	CHANGE id_lieux id_lieu INT;