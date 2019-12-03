// Sommaire*******************
function clean(){
$(".JavascriptTableau").append('<div id=fonctions class=classe>Les fonctions Javascript</div>');
$(".JavascriptTableau").append('<div id=tableaux class=classe>Les tableaux</div>');
$(".JavascriptTableau").append('<div id=boucle class=classe>Les Boucles</div>');
$(".JavascriptTableau").append('<div id=condition class=classe>Les conditons</div>');
$(".JavascriptTableau").append('<div id=objet class=classe>Les Objets</div>');
$(".JavascriptTableau").append('<div id=lesLiens class=classe>les liens</div>');
$(".JavascriptTableau").append('<div id=maDiv class=classe>Coucou</div>');
}


$(".active").click(function(){
	 location.reload(); // cette fonction permet de raffraichir la page lorsque l'utilisateur clique sur Accueil
});
// fonction qui gère les liens
function lien(){
	$("#lesLiens").click(function() { // on utilise le selecteur jquery
       $(".DescriptionElts").empty()// on efface tout ce qui est dans notre tableau
	});
}

$("#docJs").click(function() { // on utilise le selecteur jquery
       $("#contenu").hide(); // la méthode empty de jquery permet de supprimer tout le contenu d'un element.
       $(".JavascriptTableau").empty()// on efface tout ce qui est dans notre tableau
       $(".containerJs").show()
       clean();
       lien()

});





