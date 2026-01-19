  // Préremplir text prénom
const verifPrenom = localStorage.getItem('prenom')
let balisePrenom = document.getElementById ('prenom')

const remplirPrenom = function() {
    if(verifPrenom) {
        balisePrenom.value = verifPrenom
    }
} 

remplirPrenom ()