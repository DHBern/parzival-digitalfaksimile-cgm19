# Digitalfaksimile München, Bayerische Staatsbibliothek, Cgm 19 (`cgm19`)

## [Web publication](https://dhbern.github.io/parzival-digitalfaksimile-cgm19)

## Origin

* Published on DVD in 2008: *Die Münchner Wolfram-Handschrift Cgm 19. DVD mit einem Begleitheft. Konzept und Einführung von Michael Stolz, Simbach/Inn 2008*
  * [More information (PDF)](https://dhbern.github.io/parzival-digitalfaksimile-cgm19/meta/FlyerCgm19_einseitig.pdf)
  * About the resource:

    > Eine Digitaledition, welche die Handschrift kodikologisch und inhaltlich erschließt, ist online verfügbar […]. Sie vermag einen von editorischen Vorentscheidungen unverstellten Blick auf das Manuskript zu eröffnen und ermöglicht ein von Erläuterungen und Verweisen auf einschlägige Ausgaben unterstütztes, virtuelles Blättern in der Handschrift. Begleitend werden Transkriptionen zur Verfügung gestellt, beim ‹Titurel› in einer Synopse mit der Parallelüberlieferung. Auf diese Weise wird sichtbar, wie Wolframs Texte wenige Jahrzehnte nach ihrer Entstehung (und im Fall des ‹Titurel› auch in späteren Zeiträumen) gelesen worden sind.

    Quoting DOI: [10.24894/978-3-7965-4223-7](https://doi.org/10.24894/978-3-7965-4223-7)
  

*Archival version (as-is): Data Science Lab, pdaengeli, 2024-05-31*

## License

---

<details><summary>Clean-up (before initial commit)</summary>

General approach: remove all spurious files (copies, obsolete notes, process artefacts), primarily based on file names (visual check).

PWD: root directory of this repository

* rename files
  * `mv Daten/Transkriptionen/g_iV_frm.html Daten/Transkriptionen/g_iv_frm.html`

* purge OS junk and ftp log files:
  * `find . -type f -name "Thumbs.db" -delete`
  * `find . -type f -name \.DS_Store -delete`
  * `find . -type f -name "WS_FTP.LOG" -delete`

* (re)moved:
  * `_notes` (obsolete DreamWeaver sync files)
  * `GBilder/Ambrosiana/_notes` (obsolete DreamWeaver sync files)
  * `Extras` (Junicode ttf, two old Firefox binaries)
  * `Daten/Transkriptionen/TiturelTranskriptionen/_notes`
  * `Daten/Transkriptionen/Synopse/_notes` (obsolete DreamWeaver sync files)
  * `Daten/eklog` (php-based counter; was never used; count: 0)

* (re)moved after `grep` testing:
  * `GBilder/*_uralt`
  * `GBilder/*_alt`
  * `Daten/Startseite_bak.png`
  * `Daten/JS/*_save_*.js`
  * `Daten/JS/*_alt.js`
  * `Daten/Transkriptionen/*\(1\).html`
  * `cgm19/Daten/Transkriptionen/Synopse_bak`
  * `Daten/Transkriptionen/Synopse/Bilder/*_alt.*`
  * `GBilder/Ambrosiana/*_ohne*`

</details>
