// Récupérer et envoyer API de liste des tâches  
    const majtableau = function() {
        fetch('https://projet-todolist-one.vercel.app/todos')
        .then (data => data.json())
        .then (listeafaire => {

            // Récupérer le tableau de la page et vidage
            let tableaucorps = document.querySelector("#tableau-corps")
            tableaucorps.innerHTML = ""

            // Faire macro pour chaque tâche
            listeafaire[0].todolist.forEach (choseafaire => {
                
                // Créer ligne tableau
                let ligne = document.createElement("tr")
                ligne.className = "ligne"

                // Créer cellule texte
                let celluletext = document.createElement("td")
                celluletext.classList.add("p-1", "text-center", "border", "border-gray-300")
                celluletext.textContent = choseafaire.text

                // Créer cellule terminé
                let celluletermine = document.createElement("td")
                let termine = choseafaire.is_complete
                if (termine === true) {
                    celluletermine.classList = "action-termine"
                    celluletermine.classList.add("p-1", "bg-green-300", "text-center", "border", "border-gray-300")
                    celluletermine.textContent = "Terminé"
                } else {
                    celluletermine.classList = "action-afaire"
                    celluletermine.classList.add("p-1", "bg-blue-300", "text-center", "border", "border-gray-300")
                    celluletermine.textContent = "A faire"
                }

                // Créer cellule bouton
                let cellulebouton = document.createElement("td")
                cellulebouton.classList.add("p-1", "text-center", "border", "border-gray-300")
                const bouton = document.createElement("button")
                bouton.className = "button-detail"
                bouton.classList.add("bg-white", "font-semibold", "px-2", "py-0.5", "rounded-xl", "border-1", "hover:text-indigo-600")
                bouton.textContent = "Détails"
                    // Afficher les détails en cliquant sur le bouton du tableau
                    bouton.addEventListener ("click", function() {
                        const pagedetail = window.location.href = 'detailtaches.html?id=' + choseafaire.id
                    })
                    cellulebouton.appendChild(bouton)

                // Envoyer dans la page
                ligne.appendChild(celluletext)
                ligne.appendChild(celluletermine)
                ligne.appendChild(cellulebouton)
                tableaucorps.appendChild(ligne)
            })
        })
        .catch(error => console.error("Erreur:", error));
    }    
majtableau()
