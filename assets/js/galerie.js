/*
  PHOTOS DE LA GALERIE
  - "fichier" : nom du fichier dans images/photos (et images/vignettes)
  - "categorie" : "conferences" ou "social"
  - "legende" : texte affiché sous la photo agrandie (laissez "" s'il n'y en a pas)
  - "alt" : description de la photo pour les personnes malvoyantes et les moteurs de recherche
  Pour ajouter une photo : déposez-la dans images/photos ET une version réduite (environ 640 px) dans images/vignettes,
  puis ajoutez une ligne ci-dessous.
*/
var PHOTOS = [
  { fichier: "motivational-speech-2023-scene", categorie: "conferences", legende: "Motivational Speech, 29 avril 2023", alt: "Michkaël Reilly Solofoniaina sur scène devant l'écran Motivational Speech" },
  { fichier: "conference-salle", categorie: "conferences", legende: "", alt: "Conférence devant un public assis sur des chaises rouges" },
  { fichier: "motivational-speech-2023-groupe", categorie: "conferences", legende: "Motivational Speech, 29 avril 2023", alt: "Groupe de jeunes participants et intervenants" },
  { fichier: "motivational-speech-2023-intervenants", categorie: "conferences", legende: "Motivational Speech, 29 avril 2023", alt: "Montage photo des intervenants de Motivational Speech 2023" },
  { fichier: "affiche-motivational-speech-2023", categorie: "conferences", legende: "Affiche de Motivational Speech, 29 avril 2023", alt: "Affiche Motivational Speech pour la jeunesse malagasy" },
  { fichier: "affiche-intervenants-2023", categorie: "conferences", legende: "Les intervenants de Motivational Speech, 29 avril 2023", alt: "Affiche présentant les intervenants de Motivational Speech 2023" },
  { fichier: "affiche-table-ronde-2024", categorie: "conferences", legende: "Table ronde, Alliance française de Sainte-Marie, 3 février 2024", alt: "Affiche de la table ronde La Jeunesse, l'Avenir et Conseils" },
  { fichier: "alliance-francaise", categorie: "conferences", legende: "", alt: "Grand groupe réuni devant l'Alliance française" },
  { fichier: "programme-aide-familles", categorie: "conferences", legende: "", alt: "Réunion du programme d'aide aux familles défavorisées des zones rurales" },
  { fichier: "prise-de-parole-micro", categorie: "conferences", legende: "", alt: "Michkaël Reilly Solofoniaina au micro" },
  { fichier: "rencontre-institutionnelle-1", categorie: "conferences", legende: "", alt: "Rencontre institutionnelle dans une salle officielle" },
  { fichier: "rencontre-institutionnelle-2", categorie: "conferences", legende: "", alt: "Délégation dans une salle officielle" },
  { fichier: "kakemono-mrs", categorie: "conferences", legende: "", alt: "Deux personnes devant le kakémono de l'association MRS" },
  { fichier: "jeunes-plage", categorie: "conferences", legende: "", alt: "Rencontre avec un groupe de jeunes sur une plage" },
  { fichier: "jeunes-football", categorie: "conferences", legende: "", alt: "Rencontre avec de jeunes footballeurs sur un terrain" },

  { fichier: "enfants-mains-peintes", categorie: "social", legende: "", alt: "Enfants levant leurs mains peintes devant la fresque de l'association" },
  { fichier: "discours-enfants-fresque", categorie: "social", legende: "", alt: "Discours devant des enfants et la fresque « À cœur vaillant, rien d'impossible »" },
  { fichier: "fresque-coeur-vaillant", categorie: "social", legende: "", alt: "Fresque « À cœur vaillant, rien d'impossible » couverte d'empreintes de mains" },
  { fichier: "fete-enfants-benevoles", categorie: "social", legende: "", alt: "Enfants et bénévoles réunis lors d'une fête" },
  { fichier: "enfants-reunis", categorie: "social", legende: "", alt: "Enfants réunis lors d'une action de l'association" },
  { fichier: "enfants-cadeaux-1", categorie: "social", legende: "", alt: "Enfants avec leurs cadeaux devant un bâtiment" },
  { fichier: "enfants-cadeaux-2", categorie: "social", legende: "", alt: "Enfants recevant des cadeaux dans une salle" },
  { fichier: "repas-enfants-1", categorie: "social", legende: "", alt: "Enfants partageant un repas à table" },
  { fichier: "repas-enfants-2", categorie: "social", legende: "", alt: "Repas servi à des enfants en plein air" },
  { fichier: "dons-fournitures", categorie: "social", legende: "", alt: "Dons préparés sur une table : fournitures, ballons, guitare" },
  { fichier: "equipe-cour", categorie: "social", legende: "", alt: "Équipe réunie dans une cour" },
  { fichier: "discours-cour", categorie: "social", legende: "", alt: "Prise de parole devant des jeunes assis dans une cour" },
  { fichier: "prise-de-parole-plein-air", categorie: "social", legende: "", alt: "Prise de parole en plein air" },
  { fichier: "prise-de-parole-action", categorie: "social", legende: "", alt: "Prise de parole lors d'une action" },
  { fichier: "sapeurs-pompiers-1", categorie: "social", legende: "", alt: "Rencontre avec les sapeurs-pompiers devant un camion" },
  { fichier: "sapeurs-pompiers-2", categorie: "social", legende: "", alt: "Sapeurs-pompiers devant leur caserne" },
  { fichier: "sapeurs-pompiers-dons", categorie: "social", legende: "", alt: "Remise de dons aux sapeurs-pompiers" },
  { fichier: "equipe-benevoles", categorie: "social", legende: "", alt: "Équipe de bénévoles en polo MRS portant des sacs de dons" },
  { fichier: "equipe-benevoles-dos", categorie: "social", legende: "", alt: "Bénévoles de dos, polos Motivation Redevabilité Succès" },
  { fichier: "equipe-famille", categorie: "social", legende: "", alt: "Bénévoles posant avec une mère et ses enfants" },
  { fichier: "distribution-preparation", categorie: "social", legende: "", alt: "Préparation d'une distribution" },
  { fichier: "distribution-sacs-1", categorie: "social", legende: "", alt: "Distribution de sacs à des enfants" },
  { fichier: "distribution-sacs-2", categorie: "social", legende: "", alt: "Bénévoles remettant un sac à une jeune fille" },
  { fichier: "distribution-rue", categorie: "social", legende: "", alt: "Bénévole marchant avec un sac de dons" },
  { fichier: "distribution-trottoir", categorie: "social", legende: "", alt: "Remise d'un sac à un enfant sur un trottoir" },
  { fichier: "distribution-pluie", categorie: "social", legende: "", alt: "Distribution sous la pluie depuis une voiture" },
  { fichier: "rencontre-rue-1", categorie: "social", legende: "", alt: "Bénévole accroupi auprès d'une famille dans la rue" },
  { fichier: "rencontre-rue-2", categorie: "social", legende: "", alt: "Échange avec des enfants dans la rue" },
  { fichier: "polo-mrs-enfants", categorie: "social", legende: "", alt: "Bénévole en polo MRS face à deux enfants" },
  { fichier: "enfant-sourire", categorie: "social", legende: "", alt: "Enfant souriant recevant un sac" }
];

(function () {
  "use strict";
  var grille = document.querySelector("[data-galerie]");
  var vis = document.querySelector(".visionneuse");
  if (!grille) return;
  var visibles = [], courant = 0;

  function afficher(filtre) {
    grille.innerHTML = "";
    visibles = PHOTOS.filter(function (p) { return filtre === "tout" || p.categorie === filtre; });
    visibles.forEach(function (p, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Agrandir : " + (p.legende || p.alt));
      var img = document.createElement("img");
      img.src = "images/vignettes/" + p.fichier + ".jpg"; img.alt = p.alt; img.loading = "lazy";
      b.append(img);
      b.addEventListener("click", function () { ouvrir(i); });
      grille.append(b);
    });
  }
  function montrer() {
    var p = visibles[courant];
    var img = vis.querySelector("img");
    img.src = "images/photos/" + p.fichier + ".jpg"; img.alt = p.alt;
    vis.querySelector("figcaption").textContent = p.legende || "";
  }
  function ouvrir(i) {
    courant = i; montrer();
    if (typeof vis.showModal === "function") vis.showModal(); else vis.setAttribute("open", "");
  }
  function pas(d) { courant = (courant + d + visibles.length) % visibles.length; montrer(); }

  if (vis) {
    vis.addEventListener("click", function (e) {
      var a = e.target.closest("[data-action]");
      if (a) {
        var act = a.getAttribute("data-action");
        if (act === "fermer") vis.close(); else pas(act === "suiv" ? 1 : -1);
      } else if (e.target === vis) vis.close();
    });
    vis.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") pas(1);
      if (e.key === "ArrowLeft") pas(-1);
    });
  }

  document.querySelectorAll("[data-filtre]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll("[data-filtre]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      afficher(b.getAttribute("data-filtre"));
    });
  });
  afficher("tout");
})();
