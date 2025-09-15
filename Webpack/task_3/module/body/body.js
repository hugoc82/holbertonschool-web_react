import $ from "jquery";
import _ from "lodash";
import "./body.css";

$("body").append('<button id="clickButton">Click here to get started</button>');
$("body").append("<p id='count'></p>");

let count = 0;

function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

$("#clickButton").on("click", _.debounce(updateCounter, 500));
