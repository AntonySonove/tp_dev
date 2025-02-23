<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Article</title>
</head>
<body>
<form action="" method="post">
        <p><input type="text" name="nom_article" placeholder="Nom de l'article"></p>
        <p><input type="text" name="contenu_article" placeholder="Contenu de l'article"></p>
        <p><input type="number" name="prix_article" step="0.01" placeholder="Prix de l'article"></p>
        <p><input type="submit" name="submit" value="Ajouter"></p>
        <?="<p>$message</p>";?>
    </form>
    <h1>liste des articles</h1>
    <ul>
        <?=$articleList;?>
    </ul>
</body>
</html>