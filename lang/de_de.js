"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var T_DE =
/*#__PURE__*/
function () {
  function T() {
    _classCallCheck(this, T);

    this.page_title = "Élect-o-mate";
    this.qa_modal_title = "Fragen &amp; Antworten";
    this.qa_modal_body = '<h4>Wer steht hinter dem Élect-o-mate?</h4>\
					<p>Er wurde von Studierenden der Universität Passau während eines Französisch-Kurses der Fachspezifischen Fremdsprachenausbildung Kulturwissenschaft mit der Hilfe eines Informatikstudenten erstellt. Vielen Dank an Amelie, Aurélie, Catalina, Clara, Eva, Frederic, Isabella, Jacinta, Lara, Leandro, Lukas, Merit, Nina, Paula, Theresa, Rike, Veronika... und Julian für die Technik! Koordination: <a href=\"mailto:veronique.coiffet@uni-passau.de\">veronique.coiffet@uni-passau.de</a></p>\
\
					<h4>Wer hat die Thesen erarbeitet?</h4>\
					<p>Die Studierenden teilten sich in thematische Gruppen auf: und recherchierten auf der Grundlage der verfügbaren Materialien in Echtzeit während der Entwicklung des Wahlkampfs.</p>\
\
					<h4>Woher stammen die Positionen der Gruppen?</h4>\
					<p>Wir haben die verfügbaren Programme gegenübergestellt und durch sehr unterschiedliche journalistische Quellen ergänzt. Um eine Liste aller unserer Quellen zu erhalten, schreiben Sie uns eine E-Mail! <a href=\"mailto:veronique.coiffet@uni-passau.de\">veronique.coiffet@uni-passau.de</a>\
					</p>\
					<p>Für ihre Stellungnahmen zu den Thesen sind die Gruppen selbst verantwortlich.</p>\
\
					<h4>Von welcher Wahl reden wir hier überhaupt?</h4>\
					<p>Die französischen Parlamentswahlen 2024 finden am 30. Juni und am 7. Juli 2024 statt, um die 577 Abgeordneten der 17. Legislaturperiode der Fünften Republik zu wählen. \
          Die Wahlen waren ursprünglich für 2027 geplant, wurden aber drei Jahre vor dem regulären Ende der Amtszeit der scheidenden Legislaturperiode vorzeitig einberufen, nachdem Emmanuel Macron die Nationalversammlung als Reaktion auf die schwere Niederlage der Präsidialkoalition Ensemble bei den Europawahlen am 8. und 9. Juni 2024, bei denen sie fast 17 Prozentpunkte hinter dem Rassemblement National lag, aufgelöst hatte. Zum 6. Mal seit Beginn der Fünften Republik, wird die Nationalversammlung gem. Art. 12 der Verfassung aufgelöst, jedoch passiert dies erstmals während einer 5jährigen Amtszeit des Präsidenten.</p>\
\
					<h4>Wie werden die Punkte berechnet?</h4>\
					<p>Deine Antworten werden mit den vorgegebenen Antworten der Gruppen abgeglichen.</p>\
					<ul>\
						<li>Stimmt die Antwort überein, werden der Gruppe 2 Punkte gutgeschrieben;</li>\
						<li>Weicht die Antwort leicht ab (Zustimmung/Neutral oder Neutral/Ablehnung), wird der Gruppe 1 Punkt gutgeschrieben;</li>\
						<li>Sind die Antworten entgegengesetzt oder hat eine Gruppe eine These nicht beantwortet, gibt es keine Punkte für die\
							Gruppe.\
						</li>\
					</ul>\
					<p>Eine These, die du übersprungen hast, wird nicht gewertet. Die erreichbare Höchstpunktzahl wird dadurch geringer.</p>\
					<p>Eine These, die doppelt gewichtet werden soll, wird doppelt gewichtet, das heißt, für sie wird die doppelte Punktzahl\
						gutgeschrieben (0/2/4). Dadurch können insgesamt mehr Punkte erreicht werden.</p>\
\
					<h4>Werden meine Antworten gespeichert?</h4>\
					<p>Nein. Alles läuft vollständig in deinem Browser ab.</p>\
\
					<h4>Ich habe einen inhaltlichen Fehler gefunden!</h4>\
					<p>Gib uns gern Bescheid, wir sehen uns das an. Wer „wir“ sind, steht oben auf dieser Seite.</p>\
\
					<h4>Wer hat den Élect-o-mate programmiert?</h4>\
					<p>Das steht\
						<a href="https://github.com/TheMrPixelDev/mahlowat">hier</a>. Der Élect-o-mate basiert auf der freuen Software \"Mahlowat\" welche du <a href=\"https://github.com/hszemi/mahlowat\">hier</a> finden kannst!</p>\
\
					<h4>Ich habe einen Programmierfehler gefunden!</h4>\
					<p>Oh nein! Wenn du den Fehler\
						<a href="https://github.com/TheMrPixelDev/mahlowat">meldest</a>, wird er vielleicht behoben.</p>';
    this.btn_qa_modal_close = "Schließen";
    this.swype_info_message_text = "Wische, um manuell zwischen Thesen zu wechseln";
    this.btn_swype_info_ok = "OK";
    this.start_subtitle = "Der Élect-o-mate ermöglicht es dir, deine Meinung zu ausgewählten Thesen mit denen der Gruppen zu vergleichen, die nach der Auflösung der Nationalversammlung durch Präsident Emmanuel Macron 2024 zur Neuwahl antreten.";
    this.start_explanatory_text = "<p>Er wurde von Studierenden der Universität Passau während eines Französisch-Kurses der Fachspezifischen Fremdsprachenausbildung Kulturwissenschaft mit der Hilfe eines Informatikstudenten erstellt. Vielen Dank an Amelie, Aurélie, Catalina, Clara, Eva, Frederic, Isabella, Jacinta, Lara, Leandro, Lukas, Merit, Nina, Paula, Theresa, Rike, Veronika... und Julian für die Technik! Koordination: <a href=\"mailto:veronique.coiffet@uni-passau.de\">veronique.coiffet@uni-passau.de</a>\
		      </p>\
					<p>Wir haben in der gebotenen Kürze der Zeit unser Bestes getan. Jede*r Bürger*in ist letzen Endes verantwortlich, sich detailliert zu informieren. Unsere zahlreichen Quellen oder unseren didaktischen Leitfaden könnt Ihr erfahren, wenn Ihr uns eine e-mail schreibt!</p>";
    this.btn_start = "Mahlowat starten!";
    this.btn_start_show_qa = "Fragen &amp; Antworten";
    this.btn_toggle_thesis_more_text = "Erläuterung";
    this.btn_important = "These doppelt gewichten";
    this.btn_yes_text = "Zustimmung";
    this.btn_neutral_text = "Neutral";
    this.btn_no_text = "Ablehnung";
    this.btn_skip_text = "Überspringen";
    this.btn_mahlowat_show_start = "Zurück zur Startseite";
    this.btn_mahlowat_show_qa = "Fragen &amp; Antworten";
    this.btn_mahlowat_skip_remaining_theses = "Alle verbleibenden Thesen überspringen und aktuellen Stand auswerten";
    this.title_results = "Ergebnis";
    this.title_results_summary = "Zusammenfassung";
    this.text_result_below_summary = '<small>Nicht zufrieden mit dem Ergebnis?\
				<button class="btn btn-sm btn-light" onclick="showMahlowatFirstThesis()">Ändere die Antworten oder die Gewichtung!</button>\
			</small>';
    this.title_results_details = "";
    this.btn_results_show_start = "Zurück zur Startseite";
    this.btn_results_show_qa = "Fragen &amp; Antworten";
  }

  _createClass(T, [{
    key: "thesis_number",
    value: function thesis_number(number) {
      return "These " + number;
    }
  }, {
    key: "achieved_points_text",
    value: function achieved_points_text(pointsForList, maxAchievablePoints) {
      return '' + pointsForList + '/' + maxAchievablePoints + ' Punkte';
    }
  }, {
    key: "btn_make_thesis_double_weight",
    get: function get() {
      return "These doppelt gewichten";
    }
  }, {
    key: "btn_thesis_has_double_weight",
    get: function get() {
      return "These wird doppelt gewichtet";
    }
  }, {
    key: "label_your_choice",
    get: function get() {
      return "Deine Wahl";
    }
  }, {
    key: "default_text_no_statement",
    get: function get() {
      return "<small class='text-muted'>Keine Stellungnahme.</small>";
    }
  }, {
    key: "error_loading_config_file",
    get: function get() {
      return '<b>Fehler</b> Die Konfigurationsdatei <a href="config/data.json"><tt>config/data.json</tt></a> konnte nicht geladen\
		werden. Existiert sie und enthält keine Syntaxfehler?';
    }
  }]);

  return T;
}();
