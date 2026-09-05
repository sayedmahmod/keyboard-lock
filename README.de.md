<div align="center">

<img src="build/icon.png" alt="" width="104" height="104">

# Keyboard Lock

**Tastatur sperren. In Ruhe putzen.**

Ein kleines, dunkles, plattformübergreifendes Tool, das deine Tastatur genau so
lange deaktiviert, wie du es möchtest – damit du eine Laptop-Tastatur putzen
kannst, ohne eine Seite `jjjjjjj` in das zu tippen, was gerade offen war.

[![CI](https://github.com/schafskaese/keyboard-lock/actions/workflows/ci.yml/badge.svg)](https://github.com/schafskaese/keyboard-lock/actions/workflows/ci.yml)
[![Neuestes Release](https://img.shields.io/github/v/release/schafskaese/keyboard-lock?sort=semver)](https://github.com/schafskaese/keyboard-lock/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/schafskaese/keyboard-lock/total)](https://github.com/schafskaese/keyboard-lock/releases)
[![Lizenz: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Plattformen](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-6c8cff)](#installation)
[![Sprachen](https://img.shields.io/badge/languages-12-2dd4bf)](#sprachen)

[English](README.md) · **Deutsch**

<a href="docs/screenshots/lock.png"><img src="docs/screenshots/lock.png" alt="Der Vollbild-Sperrbildschirm mit Countdown-Ring bei 01:18, der Überschrift „Keyboard locked“, einer Halten-zum-Entsperren-Schaltfläche und dem Entsperr-Kürzel" width="820"></a>

</div>

---

## Warum

Eine Tastatur zu putzen ist eine Zwei-Minuten-Aufgabe, die jedes Betriebssystem
zur Zumutung macht. Du wischst über die Tasten und hast siebzehn Menüs geöffnet,
eine Datei umbenannt, eine halbe Nachricht verschickt und die Lautstärke auf
Maximum gedreht.

Keyboard Lock legt sich über deine Bildschirme, schluckt für die gewählte Dauer
jeden Tastendruck und gibt dir die Tastatur automatisch zurück. Die Maus
funktioniert die ganze Zeit weiter – du sitzt also nie fest.

## Funktionen

- **Sperren von 10 Sekunden bis 1 Stunde**, mit Vorgabe-Chips und Schieberegler.
- **Immer drei Wege heraus:** der Timer läuft ab, du drückst dein Entsperr-Kürzel,
  oder du hältst die Schaltfläche mit der Maus gedrückt.
- **Ein zweiter Gedanke bei langen Sperren.** Ab 5 Minuten musst du zum
  Bestätigen eine Schaltfläche halten – und wirst vorher an das Entsperr-Kürzel
  erinnert. Die Schwelle ist einstellbar, auch abschaltbar.
- **Alle Bildschirme abgedeckt.** Schließt du mitten in der Sperre einen Monitor
  an, wird er ebenfalls abgedeckt.
- **Systemkürzel optional blockieren**, damit ein verrutschtes Tuch keine App
  beendet, kein Fenster wechselt und nicht die Lautstärke verstellt.
- **12 Sprachen**, standardmäßig passend zu deiner Systemsprache.
- **Konsequent dunkel**, mit fünf Akzentfarben.
- **Nichts, dem man vertrauen müsste.** Kein Netzwerkzugriff, keine
  Laufzeit-Abhängigkeiten, kein Mitschneiden von Tasten, eine einzige
  Einstellungsdatei. Siehe [SECURITY.md](SECURITY.md).

## Installation

Hol dir den Build für deine Plattform aus dem
**[neuesten Release](https://github.com/schafskaese/keyboard-lock/releases/latest)**.

| Plattform   | Download                              | Hinweise                                         |
| ----------- | ------------------------------------- | ------------------------------------------------ |
| **macOS**   | `.dmg` (Apple Silicon und Intel)      | Auch als `.zip` verfügbar                        |
| **Windows** | `.exe`-Installer oder portable `.exe` | x64 und arm64                                    |
| **Linux**   | `.AppImage`, `.deb` oder `.rpm`       | AppImage vorher mit `chmod +x` ausführbar machen |

<details>
<summary><strong>Die Builds sind unsigniert – so öffnest du sie trotzdem</strong></summary>

<br>

Signaturzertifikate kosten jährlich Geld, und dieses Tool ist kostenlos. Die
Builds kommen direkt aus einem öffentlichen GitHub-Actions-Lauf, den du
nachlesen kannst – dein Betriebssystem weiß das nur nicht.

**macOS** – Rechtsklick auf die App, _Öffnen_, im Dialog erneut _Öffnen_. Wenn
macOS sich weigert:

```bash
xattr -dr com.apple.quarantine "/Applications/Keyboard Lock.app"
```

**Windows** – SmartScreen meldet „Der Computer wurde durch Windows geschützt“.
Auf _Weitere Informationen_ und dann _Trotzdem ausführen_ klicken.

**Linux** – nichts Besonderes, nur ausführbar machen:

```bash
chmod +x Keyboard-Lock-*.AppImage
```

Wenn du einem Binary grundsätzlich nicht traust:
[Selbst bauen](#entwicklung) ist ein einziger Befehl.

</details>

## Bedienung

Dauer wählen, **Tastatur sperren** drücken, putzen. Mehr ist es nicht.

| Aktion                       | Wie                                                             |
| ---------------------------- | --------------------------------------------------------------- |
| Sperre starten               | Dauer wählen, dann **Tastatur sperren**                         |
| Lange Sperre bestätigen      | **Zum Bestätigen halten** 2 Sekunden gedrückt halten            |
| Vorzeitig entsperren – Taste | <kbd>Strg</kbd> + <kbd>Alt</kbd> + <kbd>U</kbd> (frei belegbar) |
| Vorzeitig entsperren – Maus  | **Zum Entsperren halten** 1,5 Sekunden gedrückt halten          |
| Von selbst enden lassen      | Nichts tun; der Ring läuft ab                                   |

Das Entsperr-Kürzel funktioniert auf jedem Tastaturlayout, weil es zusätzlich
gegen die physische Tastenposition geprüft wird und nicht nur gegen das Zeichen.

<table>
  <tr>
    <td width="33%" align="center">
      <a href="docs/screenshots/setup-de.png"><img src="docs/screenshots/setup-de.png" alt="Das Hauptfenster auf Deutsch mit violettem Akzent"></a>
      <br><sub><b>Dauer wählen</b></sub>
    </td>
    <td width="33%" align="center">
      <a href="docs/screenshots/confirm.png"><img src="docs/screenshots/confirm.png" alt="Der Bestätigungsschritt für eine zehnminütige Sperre"></a>
      <br><sub><b>Lange Sperren überdenken</b></sub>
    </td>
    <td width="33%" align="center">
      <a href="docs/screenshots/settings.png"><img src="docs/screenshots/settings.png" alt="Die Einstellungen mit Sprache, Akzentfarbe, Entsperr-Kürzel und Schaltern"></a>
      <br><sub><b>Anpassen</b></sub>
    </td>
  </tr>
</table>

## Wie es funktioniert

Die Sperre besteht aus gewöhnlichen, umkehrbaren Bausteinen – und das ist eine
bewusste Entscheidung, keine Abkürzung:

1. Über **jeden** Bildschirm legt sich ein rahmenloses Fenster auf
   Bildschirmschoner-Ebene, also über Menüleiste, Taskleiste und andere
   Vollbild-Apps.
2. Dieses Fenster übernimmt den Tastaturfokus und verwirft jedes Tastenereignis,
   bevor es die Seite erreicht. Stiehlt eine andere App den Fokus, holt sich das
   Fenster ihn zurück.
3. Während der Sperre reserviert die App beim Betriebssystem gängige
   Systemkürzel (Beenden, Fensterwechsel, Medientasten), damit auch die ins
   Leere laufen.
4. Deine Entsperr-Kombination ist der eine Akkord, der geprüft statt verworfen
   wird.

Es wird nichts in den Eingabe-Stack installiert: kein Treiber, keine
Kernel-Erweiterung, kein globaler Hook, keine Bedienungshilfen-Berechtigung.
**Die Konsequenz ist der eigentliche Punkt – es gibt keinen Zustand, in dem man
hängenbleiben kann.** App abschießen, abmelden oder den Strom ziehen: die
Tastatur funktioniert danach einfach wieder.

### Was es nicht kann

Ehrlich über die Grenzen zu sein ist wichtiger als eine längere Funktionsliste:

- **Einige Kürzel gehören dem Betriebssystem und lassen sich nicht abfangen.**
  <kbd>Strg</kbd>+<kbd>Alt</kbd>+<kbd>Entf</kbd> unter Windows, das
  Sofort-Beenden unter macOS und manche Compositor-Kürzel unter Linux
  funktionieren immer. Das ist eine Sicherheitseigenschaft deines Systems – und
  eine gute.
- **Wayland begrenzt, was jede App greifen darf.** Unter GNOME oder KDE mit
  Wayland deckt das Fenster den Bildschirm weiterhin ab und schluckt die an es
  gesendeten Tasten, das Reservieren globaler Kürzel kann aber stillschweigend
  fehlschlagen. Die App sagt dir das, statt so zu tun als ob.
- **Die Tastatur wird nicht auf Hardware-Ebene abgeschaltet.** Wenn die Tasten
  elektrisch tot sein müssen – etwa für eine Nassreinigung –, schalte das Gerät
  aus.
- **Es ist keine Sicherheitssperre.** Sie verhindert Versehen, keine Personen.
  Dafür ist die Bildschirmsperre deines Systems da.

## Sprachen

Die Oberfläche folgt deiner Systemsprache und lässt sich in den Einstellungen
überschreiben.

English · Deutsch · Français · Español · Italiano · Português (BR) · Nederlands ·
Polski · Русский · Türkçe · 日本語 · 简体中文

Deine fehlt? [docs/TRANSLATING.md](docs/TRANSLATING.md) erklärt, wie du eine
hinzufügst – eine JSON-Datei und zwei Zeilen Registrierung.

## Einstellungen

| Einstellung               | Standard      | Wirkung                                                                |
| ------------------------- | ------------- | ---------------------------------------------------------------------- |
| Sprache                   | System folgen | Überschreibt die erkannte Sprache                                      |
| Akzentfarbe               | Indigo        | Fünf Farben für das dunkle Design                                      |
| Entsperr-Kürzel           | `Strg+Alt+U`  | Mindestens zwei Modifikatoren, damit ein Tuch es nicht trifft          |
| Bei langen Sperren fragen | Ab 5 Min.     | Der Halten-zum-Bestätigen-Schritt; 2/5/10/15 Min. oder aus             |
| Mit der Maus entsperren   | An            | Die Halten-Schaltfläche auf dem Sperrbildschirm                        |
| Systemkürzel blockieren   | An            | Reserviert Beenden, Fensterwechsel und Medientasten während der Sperre |
| Bildschirm wach halten    | An            | Verhindert, dass der Bildschirm mitten in der Sperre einschläft        |
| Ton am Ende der Sperre    | An            | Ein kurzer, synthetisierter Zweiklang                                  |

Die Einstellungen liegen in einer einzigen JSON-Datei:

- macOS – `~/Library/Application Support/Keyboard Lock/settings.json`
- Windows – `%APPDATA%\Keyboard Lock\settings.json`
- Linux – `~/.config/Keyboard Lock/settings.json`

Eine kaputte oder von Hand bearbeitete Datei kann dich nicht aussperren: Werte
werden beim Lesen geprüft, und ein unbrauchbares Entsperr-Kürzel fällt auf den
Standard zurück.

## Entwicklung

Node 20.19 oder neuer. Keine nativen Module, also keine Build-Toolchain nötig.

```bash
git clone https://github.com/schafskaese/keyboard-lock.git
cd keyboard-lock
npm ci
npm run dev
```

```bash
npm test           # Unit-Tests
npm run lint       # ESLint
npm run typecheck  # beide TypeScript-Projekte
npm run dist       # Installer für deine Plattform, nach dist/
```

App-Icon (`npm run icons`) und die Screenshots in dieser README
(`npm run screenshots`) werden beide aus dem Quellcode erzeugt – das Icon von
einem kleinen SDF-Rasterizer, die Screenshots durch Aufnehmen der echten
gebauten Oberfläche. Keins davon ist ein handgemaltes Asset, das veralten kann.

```
src/
├── main/       Electron-Hauptprozess: Fenster, die Sperre, IPC, Einstellungen
├── preload/    Die einzige, typisierte Brücke zu den Renderern
├── renderer/   Zwei Fenster – die Setup-Karte und der Sperrbildschirm
└── shared/     Reine Logik: Dauern, Tastenkürzel, Validierung, i18n
```

`src/shared` importiert weder Electron noch das DOM – genau das macht die
entscheidenden Fragen testbar: Kann diese Sperre enden? Ist dieses Kürzel
brauchbar? Ist diese Dauer sinnvoll?

## Mitmachen

Pull Requests sind willkommen. [CONTRIBUTING.md](CONTRIBUTING.md) enthält
Setup, Befehle und die eine Regel, die über allem steht: **Ein Mensch muss seine
Tastatur immer zurückbekommen können.**

- Fehler gefunden? [Issue öffnen](https://github.com/schafskaese/keyboard-lock/issues/new/choose)
- Sicherheitsmeldung? [SECURITY.md](SECURITY.md)
- Sprache hinzufügen? [docs/TRANSLATING.md](docs/TRANSLATING.md)

## Lizenz

[MIT](LICENSE) © Keyboard Lock Contributors

<div align="center">
<br>
<sub>Gebaut mit <a href="https://www.electronjs.org/">Electron</a>, TypeScript und ohne Laufzeit-Abhängigkeiten.</sub>
</div>
