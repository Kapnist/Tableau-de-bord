

// on ajoute le contenue de notre tableau de gauche
function testTechniques(){
$(".JavascriptTableau").append('<div id=fonctions class=classe>Culture générale</div>');
$(".JavascriptTableau").append('<div id=tableaux class=classe>le test algoritmique</div>');
$(".JavascriptTableau").append('<div id=boucle class=classe>Le mini projet</div>');
$(".JavascriptTableau").append('<div id=condition class=classe>le test du plus et du moin</div>');
$(".JavascriptTableau").append('<div id=objet class=classe>les test de couleur</div>');
$(".JavascriptTableau").append('<div id=maDiv class=classe>réaliser un mini panorama de photo</div>');
$(".JavascriptTableau").append('<div id=maDiv class=classe>réaliser une calculatrice</div>');
// contenu des fonction js

}


$(".active").click(function(){
	 location.reload(); // cette fonction permet de raffraichir la page lorsque l'utilisateur clique sur Accueil
});
$("#testTechJs").click(function() { // on utilise le selecteur jquery
       $("#contenu").hide(); // la méthode empty de jquery permet de supprimer tout le contenu d'un element.
       $(".JavascriptTableau").empty() // on efface le contenu de la div pour afficher le nouveau contenu
       $(".containerJs").show() // on fait appel à notre fonction pour ajouter du contenu à gauche
       testTechniques();
});



