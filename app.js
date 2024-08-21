document.addEventListener("DOMContentLoaded", () => {
  const magicBall = document.getElementById("magic-ball");
  const getAnswerButton = document.getElementById("get-answer");
  const askAnotherButton = document.getElementById("ask-another");
  const ballContainer = document.getElementById("ball-container");

  /**
   * Liste des réponses possibles que la boule magique peut donner
   * @type {string[]}
   */
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
    "Oublie ça, ce n’est pas pour toi",
  ];

  /**
   * Gestion du clic sur le bouton "Réponse"
   * @listens click
   */
  getAnswerButton.addEventListener("click", () => {
    // Cacher le sous-titre
    subtitle.classList.add("hidden");

    // Animation de retournement de la boule
    magicBall.classList.add("flipped");

    // Attendre la fin de l'animation pour afficher la réponse
    setTimeout(() => {
      // Masquer l'image actuelle pour éviter des problèmes de rendu
      magicBall.style.display = "none";

      // Ajouter l'image floutée sous le cadre de réponse
      const blurredLayer = document.createElement("img");
      blurredLayer.src = "ressources/boulle_verso.png"; // Image identique à celle utilisée
      blurredLayer.alt = "Image floutée";
      blurredLayer.id = "blurred-layer";
      blurredLayer.classList.add(
        "w-full",
        "h-full",
        "object-cover",
        "rounded-full",
        "absolute",
        "top-0",
        "left-0",
        "blur-sm"
      );
      ballContainer.appendChild(blurredLayer);

      // Ajouter l'image de la boule retournée
      const flippedImage = document.createElement("img");
      flippedImage.src = "ressources/boulle_verso.png";
      flippedImage.alt = "Boule Magique Verso";
      flippedImage.classList.add(
        "w-full",
        "h-full",
        "object-cover",
        "rounded-full",
        "absolute",
        "top-0",
        "left-0"
      );
      ballContainer.appendChild(flippedImage);

      // Ajouter le cadre de réponse
      const responseFrame = document.createElement("div");
      responseFrame.id = "response-frame";

      const responseText = document.createElement("p");
      responseText.textContent = getRandomResponse();
      responseFrame.appendChild(responseText);

      ballContainer.appendChild(responseFrame);

      // Cacher le bouton "Réponse" et afficher le bouton "Poser une autre question"
      getAnswerButton.classList.add("hidden");
      askAnotherButton.classList.remove("hidden");
    }, 700); // La durée correspond à l'animation de retournement
  });

  /**
   * Gestion du clic sur le bouton "Poser une autre question"
   * @listens click
   */
  askAnotherButton.addEventListener("click", () => {
    // Réinitialisation de l'application
    magicBall.classList.remove("flipped");
    magicBall.style.display = "block";

    // Supprimer l'image floutée
    const blurredLayer = ballContainer.querySelector("#blurred-layer");
    if (blurredLayer) {
      blurredLayer.remove();
    }

    // Supprimer l'image de la boule verso
    const flippedImage = ballContainer.querySelector(
      "img[alt='Boule Magique Verso']"
    );
    if (flippedImage) {
      flippedImage.remove();
    }

    // Supprimer le cadre de réponse
    const responseFrame = document.getElementById("response-frame");
    if (responseFrame) {
      responseFrame.remove();
    }

    // Réafficher le sous-titre
    subtitle.classList.remove('hidden');

    // Cacher le bouton "Poser une autre question" et réafficher le bouton "Réponse"
    askAnotherButton.classList.add("hidden");
    getAnswerButton.classList.remove("hidden");
  });

  /**
   * Fonction pour obtenir une réponse aléatoire parmi les options disponibles
   * @returns {string} Une réponse aléatoire de la boule magique
   */
  function getRandomResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
});
