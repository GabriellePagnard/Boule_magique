// Réponses possibles de la boule magique
const responses = [
    "C’est certain, tu peux y croire à 100% !",
    "Les chances sont très élevées, fonce !",
    "C’est bien parti, continue comme ça !",
    "Les signes pointent vers un grand oui",
    "Tout semble en ta faveur",
    "Il y a de bonnes vibrations autour de ça",
    "Il y a de fortes probabilités",
    "C’est envisageable, mais reste prudent",
    "Difficile à dire, tout est possible",
    "Les réponses sont floues pour l’instant",
    "C’est incertain, il faudra attendre un peu",
    "Il y a des obstacles, ça ne sera pas facile",
    "Les chances sont faibles, prépare un plan B",
    "Ne te fais pas trop d’espoirs",
    "C’est mal engagé, les signes ne sont pas bons",
    "Il semble que la réponse soit non",
    "Pas vraiment, désolé…",
    "Les astres ne sont pas alignés pour ça",
    "C’est très improbable",
    "Oublie ça, ce n’est pas pour toi"
];

// Fonction pour générer une réponse aléatoire
function getRandomResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Gestionnaire d'événements pour cliquer sur la boule
document.getElementById('magic-ball').addEventListener('click', () => {
    const answerElement = document.getElementById('answer');
    answerElement.textContent = getRandomResponse();
});
