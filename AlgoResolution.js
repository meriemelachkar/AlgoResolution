// Fonction principale
function processFormule(F) {
    // Vérifier si la formule est valide
    if (formuleEstValide(F)) {
        // Diviser la formule F en clauses en utilisant la virgule comme séparateur
        let ensembleClausesF = F.split(',');

        // Diviser chaque élément du tableau en utilisant "v" comme séparateur
        ensembleClausesF = ensembleClausesF.map(function(clause) {
            return clause.split('v');
        });

        // Supprimer les littéraux et leur négation
        ensembleClausesF = supprimerLettreEtNegation(ensembleClausesF);
                  
        // Vérifier si l'ensemble de clauses est vide
        if (ensembleClausesF.length === 0) {
            console.log("F est valide");
        } else {
            console.log("F est invalide. Clauses restantes : ", ensembleClausesF.join(', '));
        }

    } else {
        console.log("L'ensemble de F est invalide");
    }
}

// Fonction pour supprimer les littéraux et leur négation de l'ensemble de clauses
function supprimerLettreEtNegation(liste) {
    let index = 0;
    while (index < liste.length) {
        let clause = liste[index];
        let literalsRemoved = false;

        for (let i = 0; i < clause.length; i++) {
            let caractere = clause[i];
            if (caractere === "!") {
                let lettre = clause[i + 1];
                if (lettre && lettre === lettre.toUpperCase()) {
                    // Supprimer la négation et la lettre
                    clause.splice(i, 2);
                    literalsRemoved = true;
                    break;
                }
            } else if (caractere === caractere.toUpperCase()) {
                let negation = "!" + caractere;
                let negationIndex = clause.indexOf(negation);
                if (negationIndex !== -1) {
                    // Supprimer la lettre et sa négation
                    clause.splice(negationIndex, 2);
                    literalsRemoved = true;
                    break;
                }
            }
        }

        // Si des littéraux et leurs négations ont été supprimés, vérifier la clause
        if (literalsRemoved) {
            // Si la clause est devenue vide, la supprimer de la liste
            if (clause.length === 0) {
                liste.splice(index, 1);
            } else {
                index++;
            }
        } else {
            // Passer à la prochaine clause
            index++;
        }
    }
    return liste;
}






function formuleEstValide(formule) {
    // Expression régulière pour la validation
    const regex = /^[PQRSTv()!,]*$/;
    return regex.test(formule);
}


// Exemple d'utilisation
let F = "Q,!Q";
processFormule(F);
