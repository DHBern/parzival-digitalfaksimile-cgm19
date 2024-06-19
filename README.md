# Digitalfaksimile München, Bayerische Staatsbibliothek, Cgm 19 (`cgm19`)

## [Web publication](https://dhbern.github.io/parzival-digitalfaksimile-cgm19)

## Origin


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
