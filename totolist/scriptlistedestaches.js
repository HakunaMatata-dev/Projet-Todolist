// Renvoi sur la page index si pas de prénom enregistré
  const verifPrenom = localStorage.getItem('prenom')
    if (!verifPrenom) {
        window.location.href = 'index.html'
    }

// Récupérer et envoyer API de liste des tâches  
    const majtableau = function() {
        fetch('http://localhost:3000/todos')
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

/*________________________________________________________________________________________________________*/

// Créer une tâche via le bouton de création de tâche

    // Faire apparaître ou disparaitre le formulaire de création de tâche en cliquant sur le bouton 
    let btnnvlletache = document.getElementById("btn-nvlletache")
    
    btnnvlletache.addEventListener ("click", function () {
        const formnvlletache = document.getElementById("form-nvlletache")    
        if (formnvlletache.style.display != "grid") {
            formnvlletache.style.display = "grid"
        } else {
            formnvlletache.style.display = "none"
        }
    })

    // Intégrer la nouvelle tâche dans le tableau
    let formnvlletache = document.getElementById("form-nvlletache")
    
    formnvlletache.addEventListener ("submit", function () {
        event.preventDefault()
        // Récupération des données
        const nomtache = document.getElementById("nom").value
        const tag1 = document.getElementById("tag1").value
        const tag2 = document.getElementById("tag2").value
        let aujourdhui = new Date ()
        // Concaténation des données
        const data = [
            {text : nomtache, created_at : aujourdhui, Tags : [tag1,tag2], is_complete : false}
        ]
        // Envoi des données
        fetch('http://localhost:3000/todos', {
            method : "POST",
            headers: {"Content-type":"application/json"},
            body : JSON.stringify(data[0])
        })
        // Mettre à jour le tableau et faire disparaître le formulaire
        majtableau()
        alert("Tableau mis à jour");
        formnvlletache.style.display = "none"
    })