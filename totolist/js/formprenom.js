// Récupérer prénom inscrit

    //Initialisation
    let formulairePrenom = document.getElementById("form-prenom")

    // Fonction permettant de récupérer le prénom
    formulairePrenom.addEventListener ("submit", function (event) {
        event.preventDefault()
        let balisePrenom = document.getElementById("prenom")
        let prenom = balisePrenom.value
        let attentionPrenom = document.getElementById("attention-prenom")
        if (prenom.length < 3 ) {
            attentionPrenom.innerText = "Merci de saisir au moins 3 caractères pour le prénom"
            setTimeout(function() {
                attentionPrenom.innerText = "";
            }, 5000);
        } else {
            attentionPrenom.innerText = ""
            window.localStorage.setItem("prenom", prenom)
            window.location.href = ('listedestaches.html')
        }
        
    })

//__________________________________________________________________________________________
