(function () {
  "use strict";
  var C = window.MRS_CONFIG || {};
  var has = function (k) { return typeof C[k] === "string" && C[k].trim() !== ""; };

  // ---------- Menu mobile ----------
  var bouton = document.querySelector(".bouton-menu");
  var nav = document.getElementById("nav-principale");
  if (bouton && nav) {
    var mq = window.matchMedia("(max-width: 960px)");
    var sync = function () {
      if (mq.matches) { nav.dataset.ouvert = bouton.getAttribute("aria-expanded") === "true" ? "true" : "false"; }
      else { nav.removeAttribute("data-ouvert"); }
    };
    bouton.addEventListener("click", function () {
      var ouvert = bouton.getAttribute("aria-expanded") === "true";
      bouton.setAttribute("aria-expanded", String(!ouvert));
      bouton.textContent = ouvert ? "Menu" : "Fermer";
      sync();
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && mq.matches) { bouton.setAttribute("aria-expanded", "false"); bouton.textContent = "Menu"; sync(); }
    });
    if (mq.addEventListener) mq.addEventListener("change", sync);
    sync();
  }

  // ---------- Liens configurables ----------
  // <a data-lien="inscriptionLyon2026" href="#contact">  -> href remplacé si la valeur existe
  document.querySelectorAll("[data-lien]").forEach(function (a) {
    var k = a.getAttribute("data-lien");
    if (has(k)) {
      a.href = C[k];
      if (/^https?:/i.test(C[k])) { a.target = "_blank"; a.rel = "noopener"; }
      if (a.dataset.texteActif) a.textContent = a.dataset.texteActif;
    }
  });
  // <p data-si="infosDon"> -> affiché seulement si la valeur existe ; [data-texte] reçoit la valeur
  document.querySelectorAll("[data-si]").forEach(function (el) {
    var k = el.getAttribute("data-si");
    el.hidden = !has(k);
    if (has(k) && el.hasAttribute("data-texte")) el.textContent = C[k];
  });
  document.querySelectorAll("[data-sinon]").forEach(function (el) { el.hidden = has(el.getAttribute("data-sinon")); });

  // ---------- Coordonnées ----------
  var liste = document.querySelector("[data-coordonnees]");
  if (liste) {
    var items = [
      ["email", "E-mail", function (v) { return "mailto:" + v; }],
      ["telephoneMadagascar", "Téléphone Madagascar", function (v) { return "tel:" + v.replace(/\s+/g, ""); }],
      ["telephoneFrance", "Téléphone France", function (v) { return "tel:" + v.replace(/\s+/g, ""); }],
      ["adresse", "Adresse", null],
      ["facebook", "Facebook", function (v) { return v; }],
      ["instagram", "Instagram", function (v) { return v; }],
      ["linkedin", "LinkedIn", function (v) { return v; }],
      ["youtube", "YouTube", function (v) { return v; }],
      ["tiktok", "TikTok", function (v) { return v; }]
    ];
    var n = 0;
    items.forEach(function (it) {
      if (!has(it[0])) return;
      n++;
      var li = document.createElement("li");
      var e = document.createElement("span"); e.className = "etiquette"; e.textContent = it[1];
      var v;
      if (it[2]) {
        v = document.createElement("a"); v.href = it[2](C[it[0]]);
        if (/^https?:/i.test(v.href)) { v.target = "_blank"; v.rel = "noopener"; v.textContent = C[it[0]].replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, ""); }
        else v.textContent = C[it[0]];
      } else { v = document.createElement("span"); v.textContent = C[it[0]]; }
      v.className = "valeur";
      li.append(e, v); liste.append(li);
    });
    if (!n) {
      var li0 = document.createElement("li"); li0.className = "vide";
      li0.textContent = "Nos coordonnées seront publiées très prochainement. En attendant, utilisez le formulaire.";
      liste.append(li0);
    }
  }
  var reseaux = document.querySelector("[data-reseaux]");
  if (reseaux) {
    [["facebook", "Facebook"], ["instagram", "Instagram"], ["linkedin", "LinkedIn"], ["youtube", "YouTube"], ["tiktok", "TikTok"]].forEach(function (r) {
      if (!has(r[0])) return;
      var a = document.createElement("a"); a.href = C[r[0]]; a.target = "_blank"; a.rel = "noopener"; a.textContent = r[1]; reseaux.append(a);
    });
  }

  // ---------- Formulaires ----------
  function statut(form, type, texte) {
    var s = form.querySelector(".statut");
    s.hidden = false; s.dataset.type = type; s.textContent = texte;
  }
  document.querySelectorAll("form[data-formulaire]").forEach(function (form) {
    var cle = form.getAttribute("data-formulaire"); // "formspreeContact" ou "formspreeBenevole"
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);
      if (has(cle)) {
        var btn = form.querySelector("[type=submit]"); btn.disabled = true; btn.textContent = "Envoi en cours…";
        fetch(C[cle], { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) {
            if (!r.ok) throw new Error();
            form.reset(); statut(form, "ok", "Message envoyé. Nous vous répondrons dès que possible.");
          })
          .catch(function () { statut(form, "erreur", "L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez" + (has("email") ? ", ou écrivez-nous à " + C.email + "." : ".")); })
          .finally(function () { btn.disabled = false; btn.textContent = btn.dataset.libelle; });
        return;
      }
      if (has("email")) {
        var sujet = (data.get("objet") || form.dataset.sujet || "Message depuis le site") + " — " + (data.get("nom") || "");
        var corps = [];
        data.forEach(function (v, k) { if (k !== "consentement" && k !== "_gotcha" && v) corps.push(k.charAt(0).toUpperCase() + k.slice(1) + " : " + v); });
        window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(corps.join("\n"));
        statut(form, "info", "Votre messagerie devrait s'ouvrir avec le message prérempli. Si rien ne s'ouvre, écrivez-nous à " + C.email + ".");
        return;
      }
      statut(form, "info", "Le formulaire n'est pas encore relié à une adresse de réception. Merci de réessayer prochainement.");
    });
    var b = form.querySelector("[type=submit]"); if (b) b.dataset.libelle = b.textContent;
  });

  // ---------- Année ----------
  document.querySelectorAll("[data-annee]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
