// Renvoi sur la page index si pas de prénom enregistré
  const verifPrenom = localStorage.getItem('prenom')
    if (!verifPrenom) {
        window.location.href = 'index.html'
    }