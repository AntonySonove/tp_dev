<?php
    include "./model/model_accueil.php";
    include "./utils/functions.php";
    //* variables
    $name="";
    $firstName="";
    $email="";
    $password;
    $password2;
    $message="";
    $userList="";

        if(isset($_POST["submit"])){
            //* vérifier que les données ne sont pas vides
            if(isset($_POST["name"]) && !empty($_POST["name"]) && isset($_POST["firstName"]) && !empty($_POST["firstName"]) && isset($_POST["password"]) && !empty($_POST["password"]) && isset($_POST["password2"]) && !empty($_POST["password2"])){
                //* vérifier le format des données
                if(filter_var($_POST["email"],FILTER_VALIDATE_EMAIL)){
                    //* vérifier que les mots de passes correspondent
                    if($_POST["password"]===$_POST["password2"]){
                        //* nettoyage des données
                        $name=nettoyage($_POST["name"]);
                        $firstName=nettoyage($_POST["firstName"]);
                        $email=nettoyage($_POST["email"]);
                        $password=nettoyage($_POST["password"]);
                        $password2=nettoyage($_POST["password2"]);
                        //* chiffrage du mot de passe
                        $password=password_hash($password,PASSWORD_BCRYPT);
                        $bdd=dbConnect();
                        $message=addUser($bdd, $name, $firstName, $email, $password);
                        
                    }else{
                        $message="<p style='color:red'>*Les mots de passe ne correspondent pas</p>";
                    }
                } else{
                    $message="<p style='color:red'>*Veuillez saisir un email valides</p>";
                }
            }else{
                $message= "<p style='color:red'>*Veuillez remplir les champs obligatoires</p>";
            }
            $userList=userAll($bdd);
        }
        //* faire la boucle sur le tableau pour créer les li
        $bdd=dbConnect();
        $data=userAll($bdd);
        foreach($data as $user){
            $userList=$userList."<div style='border-bottom:1px solid black'><ul><li style='list-style:none'><p>Nom : <span style='font-weight:bold'>".$user["name_user"]."</span></p><p>Prénom : <span style='font-weight:bold'>".$user["firstname_user"]."</span></p><p>E-mail : <span style='font-weight:bold'>".$user["email_user"]."</span></p></li></ul></div>";
            }

    include "./view/header.php";
    include "./view/view_accueil.php";
    include "./view/footer.php";
?>