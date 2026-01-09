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
        window.location.href = 'listedestaches.html'
        alert("Tableau mis à jour");
        formnvlletache.style.display = "none"
    })