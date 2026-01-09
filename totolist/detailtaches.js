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

