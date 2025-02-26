<?php
class Animal {
    //* attributs :
    public ?string $nom;
    public ?string $couleur;
    public ?float $taille;
    public ?int $age;

    //* constructeur :
    public function __construct(?string $nom,string $couleur,float $taille, int $age){
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->taille = $taille;
        $this->age = $age;
    }
}

$chien = new Animal("chien","noir",1.10,5);

echo"j'ai un". $chien->nom.". Il est de couleur ".$chien->couleur.". Il a ".$chien->age." ans"; 
?>