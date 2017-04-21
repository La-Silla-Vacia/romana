Source files for cronica_transmedia
=====

## Installation and setup

See the [lsv-interactive wiki](https://github.com/La-Silla-Vacia/lsv-interactive/wiki) for how to bootstrap a project.

## Description

Please provide a short description of this project

## Data
Please link to any external data used, as well as scripts for cleaning and analyzing that data, all of which should live in the `/data` directory.

---

## Embeding on LSV
To embed on a webpage use this code:
```html
<!-- START OF OUR INTERACTIVE -->
<script type="text/javascript">
window.cronica_transmedia_data = {
  "name": cronica_transmedia
}
</script>
<div class="lsv-interactive" id="cronica_transmedia">
<img src="https://la-silla-vacia.github.io/cronica_transmedia/screenshot.png" class="screenshot" style="width:100%;">
</div>
<script defer type="text/javascript" src="https://la-silla-vacia.github.io/cronica_transmedia/script.js"></script>
<!-- END OF OUR INTERACTIE -->
```