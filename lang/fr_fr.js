"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var T_FR =
/*#__PURE__*/
function () {
  function T() {
    _classCallCheck(this, T);

    this.page_title = "élect-o-mate";
    this.qa_modal_title = "Questions-réponses";
    this.qa_modal_body = '<h4>Qui a fait le élect-o-mate?</h4>\
					<p>Il a été composé par des étudiant.e.s de l\'Université de Passau pendant un cours de français sur objectifs spécifiques de niveau C1, avec l\'aide d\'un étudiant en informatique. Merci à Amelie, Aurélie, Catalina, Clara, Eva, Frederic, Isabella, Jacinta, Lara, Leandro, Lukas, Merit, Nina, Paula, Theresa, Rike, Veronika... et Julian pour la technique! Coordination: <a href=\"mailto:veronique.coiffet@uni-passau.de\">veronique.coiffet@uni-passau.de</a></p>\
\
					<h4>Qui a établi les théses?</h4>\
					<p>Les étudiants se sont divisés par groupes thématiques : et ont fait des recherches sur la base des documents disponibles, en temps réel pendant le développement de la campagne.</p>\
\
					<h4>Comment avons-nous obtenu les positions des groupes?</h4>\
					<p>Nous avons confronté les programmes disponibles et complété par des sources journalistiques très diverses. Pour obtenir la liste de toutes nos sources, écrivez-nous un mail ! <a href=\"mailto:veronique.coiffet@uni-passau.de\">veronique.coiffet@uni-passau.de</a>\
					</p>\
\
					<h4>Élection? Quelle élection?</h4>\
					<p>Les <strong>élections législatives françaises de 2024</strong> ont lieu le 30 juin et le 7 juillet 2024 afin d\'élire les 577 députés de la 17e législature de la Cinquième République. \
          Initialement prévues pour 2027, les élections sont convoquées de manière anticipée trois ans avant la fin normale du mandat de la législature sortante à la suite de la dissolution de l\'Assemblée nationale par Emmanuel Macron, en réaction à la lourde défaite de la coalition présidentielle Ensemble aux élections européennes des 8 et 9 juin 2024, où elle est devancée de près de 17 points par le Rassemblement national. C\'est la sixième fois depuis le début de la Cinquième République qu\'une dissolution est décrétée par recours à l’art. 12 de la Constitution, mais la première au cours d\'un quinquennat. \
          </p>\
\
					<h4>Les points comment sont-ils calculés?</h4>\
					<p>Vos réponses sont comparées avec les réponses des groupes.</p>\
					<ul>\
						<li>Le groupe gagne 2 points si elle a donné la même réponse que vous;</li>\
						<li>Si il y a une différence minuscule (Oui/Neutre ou Neutre/Non), le groupe gagne 1 point;</li>\
						<li>Des réponses contraires et une thése à laquelle une groupe n\'a pas repondu ne donnent pas de points.\
						</li>\
					</ul>\
					<p>Une thèse que vous avez sautée ne donne pas de points. Le total des points atteignable est alors diminué.</p>\
					<p>Une thèse dont vous avez doublé les points donne le double des points (0/2/4). Le total des points atteignable est alors augmenté.</p>\
\
					<h4>Mes réponses sont-elles enregistrées?</h4>\
					<p>Non. Tout est traité dans votre navigateur seulement. Dès que vous fermez la page, tout est perdu.</p>\
\
					<h4>J\'ai trouvé une erreur dans le contenu!</h4>\
					<p>Informez-nous et nous allons examiner cette erreur. Si vous ne savez pas qui est «nous», regardez en haut sur cette page.</p>\
\
					<h4>Qui a programmé le élect-o-mate?</h4>\
					<p><a href="https://github.com/TheMrPixelDev/mahlowat">Regardez ici</a>. Elect-o-mate est basé sur le logiciel libre «Mahlowat» que tu peux trouver <a href=\"https://github.com/hszemi/mahlowat\">ici</a>.</p>\
\
					<h4>J\'ai trouvé une erreur de programmation!</h4>\
					<p>Mon dieu! Si tu signales l\'erreur\
						<a href="https://github.com/TheMrPixelDev/mahlowat">ici</a>, il se peut que ce sera reparé.</p>';
    this.btn_qa_modal_close = "Fermer";
    this.swype_info_message_text = "Balayez pour changer la thése";
    this.btn_swype_info_ok = "OK";
    this.start_subtitle = "L'élect-o-mate est une application qui vous aide à décider pour qui voter. Mais malgré tout, c'est pas votre mère, alors au final, faites ce que vous voulez. 😊";
    this.start_explanatory_text = "<p>L' élect-o-mate vous permet de comparer votre opinion sur des thèses sélectionnées avec les opinions des groupes qui participent à l'élection. Il a été composé par des étudiant.e.s de l'Université de Passau pendant un cours de français sur objectifs spécifiques de niveau C1, avec l'aide d'un étudiant en informatique. Merci à Amelie, Aurélie, Catalina, Clara, Eva, Frederic, Isabella, Jacinta, Lara, Leandro, Lukas, Merit, Nina, Paula, Theresa, Rike, Veronika... et Julian pour la technique! Coordination: <a href=\"mailto:veronique.coiffet@uni-passau.de\">veronique.coiffet@uni-passau.de</a>\
					</p>\
					<p>Nous avons fait de notre mieux dans la rapidité du temps imparti, la responsabilité des informations détaillées incombe à chaque citoyen. Pour connaître la totalité de nos sources ou la structure pédagogique de notre projet, écrivez-nous un mail !</p>";
    this.btn_start = "Demarrer le élect-o-mate!";
    this.btn_start_show_qa = "Questions-réponses";
    this.btn_toggle_thesis_more_text = "Explication";
    this.btn_important = "Doubler les points";
    this.btn_yes_text = "Oui";
    this.btn_neutral_text = "Neutre";
    this.btn_no_text = "Non";
    this.btn_skip_text = "Sauter";
    this.btn_mahlowat_show_start = "Retourner à la page d'accueil";
    this.btn_mahlowat_show_qa = "Questions-réponses";
    this.btn_mahlowat_skip_remaining_theses = "Sauter les théses restants et evaluer l'état présent";
    this.title_results = "Résultat";
    this.title_results_summary = "Résumé";
    this.text_result_below_summary = '<small>Vous n\'aimez pas votre résultat?\
				<button class="btn btn-sm btn-light" onclick="showMahlowatFirstThesis()">Changez les réponses ou les points doubles!</button>\
			</small>';
    this.title_results_details = "";
    this.btn_results_show_start = "Retourner à la page d'accueil";
    this.btn_results_show_qa = "Questions-réponses";
  }

  _createClass(T, [{
    key: "thesis_number",
    value: function thesis_number(number) {
      return "Thése " + number;
    }
  }, {
    key: "achieved_points_text",
    value: function achieved_points_text(pointsForList, maxAchievablePoints) {
      return '' + pointsForList + '/' + maxAchievablePoints + ' Points';
    }
  }, {
    key: "btn_make_thesis_double_weight",
    get: function get() {
      return "Doubler les points";
    }
  }, {
    key: "btn_thesis_has_double_weight",
    get: function get() {
      return "Points doublés";
    }
  }, {
    key: "label_your_choice",
    get: function get() {
      return "Votre selection";
    }
  }, {
    key: "default_text_no_statement",
    get: function get() {
      return "<small class='text-muted'>Pas de position.</small>";
    }
  }, {
    key: "error_loading_config_file",
    get: function get() {
      return '<b>Erreur</b> Le fichier de configuration \
		<a href="config/data.json"><tt>config/data.json</tt></a> n\'a pas été trouvé. Existe-t-il? Y a-t-il des erreurs de syntaxe?';
    }
  }]);

  return T;
}();
