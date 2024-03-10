<h1>Readme - Validateur de Formules Logiques</h1>
Ce programme JavaScript implémente un validateur de formules logiques. Il prend en entrée une formule logique, vérifie sa validité syntaxique et effectue des opérations pour détecter la présence de clauses valides.

<h1>Fonctionnalités</h1>
Validation de Formules Logiques : La fonction formuleEstValide vérifie si une formule logique donnée est syntaxiquement valide en utilisant une expression régulière.
Traitement de Formules : La fonction processFormule(F) traite une formule logique en plusieurs étapes :
-Vérification de Validité : La formule est d'abord validée syntaxiquement.
-Division en Clauses : La formule est divisée en clauses en utilisant la virgule comme séparateur, puis chaque clause est divisée en -littéraux en utilisant "v" comme séparateur.
-Suppression des Littéraux et de Leur Négation : Les littéraux et leurs négations sont supprimés des clauses.
-Vérification de Clause Vide : Après la suppression des littéraux, on vérifie si la clause est devenue vide. Si c'est le cas, elle est retirée de la liste.
-Affichage du Résultat : Le programme affiche si la formule est valide ou invalide, ainsi que les clauses restantes en cas d'invalidité.

<h1>Remarques</h1>
Ce programme est conçu pour valider la syntaxe des formules logiques et effectuer des opérations de base sur ces formules.
Il peut être étendu pour inclure des fonctionnalités supplémentaires telles que l'évaluation de la vérité des formules logiques.



