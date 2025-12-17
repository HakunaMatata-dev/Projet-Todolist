// Récupérer prénom inscrit
    //Initialisation
    let formulairePrenom = document.getElementById("form-prenom")

    // Fonction permettant de récupérer le prénom
    formulairePrenom.addEventListener ("submit", function () {
        event.preventDefault()
        let balisePrenom = document.getElementById("prenom")
        let prenom = balisePrenom.value
        let attentionPrenom = document.getElementById("attention-prenom")
        if (!prenom) {
            console.log("Pas de prénom")
            attentionPrenom.innerText = "Le champ prénom n'est pas renseigné"
        } else {
            attentionPrenom.innerText = ""
            window.localStorage.setItem("prenom", prenom)
            window.location.href = ('listedestaches.html')
        }
        setTimeout(function() {
        attentionPrenom.innerText = "";
        }, 5000);
    })