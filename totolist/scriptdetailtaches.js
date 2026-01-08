// Remplir les données à l'ouverture de la page
    // Récupérer l'ID
        const params = new URLSearchParams(window.location.search)
        const id = params.get ('id')
        const urlId = `http://localhost:3000/todos/${id}`
    // Remplir les données
        //Récupérer les données
            fetch(`http://localhost:3000/todos/${id}`)
            .then (data => data.json())
            .then (data => {
                // Remplir la tache
                    const baliseTache = document.getElementById("nomtache")
                    baliseTache.textContent = data.text
                // Remplir la date
                    const baliseCreation = document.getElementById("date")
                    const creation = `${data.created_at}`
                    baliseCreation.textContent = creation
                // Remplir les tags
                    const baliseTag = document.getElementById("tag")
                    const tag = `${data.Tags}`
                    baliseTag.textContent = tag
                // Remplir le statut et le bouton de cloture ou réouverture tâche
                const baliseStatut = document.getElementById("statut") 
                const baliseBoutonStatut = document.getElementById("btn-statut")
                let statut = ""
                let boutonStatut = ""
                if (data.is_complete === true) {
                    statut = "Terminé"
                    boutonStatut = "Réouvrir la tâche"
                } else {
                    statut = "A faire"
                    boutonStatut = "Cloturer tâche"
                }                      
                const valeurStatut = `${statut}`
                baliseStatut.textContent = valeurStatut
                baliseBoutonStatut.textContent = boutonStatut
            })

//________________________________________________________________________________________________
// Gérer le bouton retour
    const btnRetour = document.getElementById("btn-retour")
    btnRetour.addEventListener ("click", function () {
        event.preventDefault()
        window.location.href = 'listedestaches.html'
    })

//________________________________________________________________________________________________
// Gérer le bouton suppression de la tâche
    const btnSupprimer = document.getElementById("btn-supprimer")
    btnSupprimer.addEventListener ("click", function () {
        event.preventDefault()
        // Récupérer l'ID
            const params = new URLSearchParams(window.location.search)
            const id = params.get ('id')
        // Envoi des données
            fetch((`http://localhost:3000/todos/${id}`), {
                method : "DELETE",
                headers: {"Content-type":"application/json"},
            })
        // Retour à la liste de tâches
            .then (() => {
                window.location.href = 'listedestaches.html'
            })
            .catch(error => {
                console.error("Erreur réseau :", error);
            });
    })

//_________________________________________________________________________________________________
// Gérer le bouton réouverture de la tâche ou cloture de la tâche
    const btnStatut = document.getElementById("btn-statut")
    btnStatut.addEventListener ("click", function () {
        event.preventDefault()
        // Récupérer l'ID
        const params = new URLSearchParams(window.location.search)
        const id = params.get ('id')
        // Récupération du statut
        const baliseStatut = document.getElementById("statut")
        const statutActuel = baliseStatut.textContent
        console.log(statutActuel)
        // Modification du statut et envoi des données
        let listeafaire
        let nouvelleValeur
        fetch('http://localhost:3000/todos')
            .then (response => response.json())
            .then (data => {
                listeafaire = data
                if (statutActuel === "Terminé") {
                    nouvelleValeur = false
                } else {
                    nouvelleValeur = true
                }  
            })
            .then (() => {
                console.log(nouvelleValeur)
                return fetch(`http://localhost:3000/todos/${id}`, {
                    method: "PUT",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify({is_complete: nouvelleValeur})
                })
            })
            // Retour à la liste de tâches
            .then (() => {
                window.location.href = 'listedestaches.html'
            })
            .catch(error => {
                console.error("Erreur réseau :", error);
            });
    })