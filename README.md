# Site de l'Association MRS

Site vitrine de l'association **MRS — Motivation, Redevabilité, Succès** : présentation, Motivational Speech, actions sociales, galerie, page de la 3ᵉ édition à Lyon (5 décembre 2026), soutien et contact.

Site statique (HTML, CSS, JavaScript), sans outil de compilation, publié avec **GitHub Pages**.

## Mettre le site en ligne (une seule fois)

1. Sur GitHub, ouvrez le dépôt → **Settings** → **Pages**.
2. *Source* : **Deploy from a branch** ; *Branch* : **main**, dossier **/ (root)** → **Save**.
3. Après une à deux minutes, le site est visible à l'adresse indiquée en haut de la page (du type `https://michkaelreilly-sys.github.io/association-mrs/`).

Nom de domaine personnalisé (ex. `associationmrs.org`) : même page, champ **Custom domain**, puis suivez les indications de GitHub chez votre registraire.

## Modifier les coordonnées et les liens

Tout se règle dans **`assets/js/config.js`** : e-mail, téléphones, réseaux sociaux, lien d'inscription Lyon 2026, lien de dons, adresses Formspree.
Sur GitHub : ouvrez le fichier → icône crayon → modifiez la valeur entre guillemets → **Commit changes**. Le site se met à jour en une à deux minutes.

Un champ laissé vide (`""`) masque ou remplace automatiquement l'élément concerné.

## Formulaires (contact et bénévolat)

GitHub Pages ne reçoit pas les formulaires lui-même. Deux options :
- **Formspree** (gratuit, recommandé) : créez un compte sur https://formspree.io avec l'adresse de l'association, créez deux formulaires (« Contact » et « Bénévoles »), puis collez leurs adresses dans `formspreeContact` et `formspreeBenevole`.
- Sans Formspree : si `email` est renseigné, les formulaires ouvrent la messagerie du visiteur avec un message prérempli.

## Photos et légendes

- Galerie : `assets/js/galerie.js`. Chaque ligne décrit une photo ; remplissez `legende: ""` pour afficher une légende.
- Ajouter une photo : déposez-la dans `images/photos/` (environ 1600 px de large) **et** une version réduite dans `images/vignettes/` (environ 640 px), avec le même nom, puis ajoutez une ligne dans `galerie.js`.
- Logos de partenaires : dans `lyon-2026.html`, remplacez les blocs « Votre logo ici » (repérez le commentaire).

## Structure

```
index.html            Accueil (association, mot du président, Motivational Speech, actions, soutien, contact)
lyon-2026.html        Motivational Speech, 3e édition — Lyon 2026
galerie.html          Galerie filtrable
mentions-legales.html Mentions légales et données personnelles (éléments entre crochets à compléter)
assets/css/style.css  Styles (charte bleu nuit #0E2A47 et doré #C9A227)
assets/js/config.js   Réglages : coordonnées et liens
assets/js/main.js     Menu, formulaires, coordonnées
assets/js/galerie.js  Liste des photos de la galerie
images/               Logos, portrait, photos et vignettes
```
