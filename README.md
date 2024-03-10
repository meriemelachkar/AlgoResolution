Readme - Validateur de Formules Logiques
Ce programme JavaScript implémente un validateur de formules logiques. Il prend en entrée une formule logique, vérifie sa validité syntaxique et effectue des opérations pour détecter la présence de clauses valides.

Fonctionnalités
Validation de Formules Logiques : La fonction formuleEstValide vérifie si une formule logique donnée est syntaxiquement valide en utilisant une expression régulière.
Traitement de Formules : La fonction processFormule(F) traite une formule logique en plusieurs étapes :
Vérification de Validité : La formule est d'abord validée syntaxiquement.
Division en Clauses : La formule est divisée en clauses en utilisant la virgule comme séparateur, puis chaque clause est divisée en littéraux en utilisant "v" comme séparateur.
Suppression des Littéraux et de Leur Négation : Les littéraux et leurs négations sont supprimés des clauses.
Vérification de Clause Vide : Après la suppression des littéraux, on vérifie si la clause est devenue vide. Si c'est le cas, elle est retirée de la liste.
Affichage du Résultat : Le programme affiche si la formule est valide ou invalide, ainsi que les clauses restantes en cas d'invalidité.
Utilisation
Pour utiliser ce programme, vous pouvez suivre ces étapes :

Définir la Formule : Définissez votre formule logique en chaîne de caractères.
Appeler la Fonction : Appelez la fonction processFormule(F) en passant la formule logique comme argument.
Vérifier la Sortie : Le programme affichera si la formule est valide ou invalide, ainsi que les clauses restantes en cas d'invalidité.
Exemple d'Utilisation
javascript
Copy code
let F = "Q,!Q";
processFormule(F);
Cet exemple vérifie la formule logique "Q,!Q" en appelant la fonction processFormule(F).

Remarques
Ce programme est conçu pour valider la syntaxe des formules logiques et effectuer des opérations de base sur ces formules.
Il peut être étendu pour inclure des fonctionnalités supplémentaires telles que l'évaluation de la vérité des formules logiques ou la génération de tables de vérité.
Licence
Ce programme est distribué sous la licence MIT. Veuillez consulter le fichier LICENSE pour plus de détails.


