import $ from "jquery";
import _ from "lodash";

// Ajouter les éléments au body
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append('<button id="clickButton">Click here to get started</button>');
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

// Compteur
let count = 0;

function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

// Lier le bouton avec lodash debounce (500ms)
$("#clickButton").on("click", _.debounce(updateCounter, 500));
