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
            fetch((`https://projet-todolist-one.vercel.app/${id}`), {
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
        fetch('https://projet-todolist-one.vercel.app')
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
                return fetch(`https://projet-todolist-one.vercel.app/${id}`, {
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