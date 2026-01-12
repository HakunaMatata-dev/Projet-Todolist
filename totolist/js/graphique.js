// Création du donut des statistiques
    // Récupérer les données terminées et à faire
        let qteTotale
        let qteTerminee = 0
        let qteEncours
        fetch('https://projet-todolist-one.vercel.app/todos')
        .then (data => data.json())
        .then (data => {
            // Récupérer la quantité totale
            qteTotale = data[0].todolist.length
            // Récupérer la quantité de terminées
            data[0].todolist.forEach(element => {
                if (element.is_complete === true) {
                    qteTerminee += 1
                }
            });
            qteEncours = qteTotale - qteTerminee
        })
        .then (() => {
            // Récupérer le contexte du canvas
            const ctx = document.getElementById('myPieChart').getContext('2d');
            // Données du graphique
            const data = {
                labels: ['Tâches terminées', 'Tâches à réaliser'],
                datasets: [{
                    data: [qteTerminee, qteEncours],
                    backgroundColor: [
                        'rgba(69, 241, 16, 0.7)',
                        'rgba(54, 162, 235, 0.7)'
                    ],
                    borderColor: [
                        'rgba(69, 241, 16, 0.7)',
                        'rgba(54, 162, 235, 0.7)'
                    ],
                    borderWidth: 1
                }]
            };
            // Configuration du graphique
            const config = {
                type: 'pie',
                data: data,
                plugins: [ChartDataLabels],
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = Math.round((value / total) * 100);
                                    return `${label}: ${value} (${percentage}%)`;
                                }
                            }
                        },
                        datalabels: {
                            formatter: (value, ctx) => {
                            const total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${percentage}%`;
                            },
                            color: '#fff', // Couleur du texte
                            font: {
                                weight: 'bold',
                                size: 50
                            }
                        }
                    }
                }
            };
            // Créer le graphique
            const myPieChart = new Chart(ctx, config);
        })

