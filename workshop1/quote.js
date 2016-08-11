/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var things = ["Torture", "Water", "Leaf", "Theater", "Math", "Architecture"];
var programmers = ["Magician", "Chicken Finger taste tester", "Pokemon trainer", "Juggler", "Unemployed", "architect"]
var castles = ["garbage can", "dumpster", "trash"]
var exertions = ["itching", "upset stomach", "burning", "nausea", "heartburn", "indigestion", "diahrrea"];
var airs = ["sky", "atmosphere", "heavens", "ether", "wind"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(things);
var thing = things[pick];
var programmer = programmers[pick];
var castles = choose(castles);
var exertion = choose(exertions);
var air = choose(airs);

document.getElementById("thing").innerHTML = thing;
document.getElementById("person").innerHTML = programmer + "s";

var q = document.getElementById("quote");

q.innerHTML =
    "\"The " + programmer +
    ", like the poet, works only slightly removed from pure thought-stuff. He builds his " +
    castles + " in the " + air + ", from " + air + ", creating by " + exertion + " of the imagination.\"" +
    "\u2014" +  "Fred Brooks, " + programmer;

q.innerHTML += "<br><br><br>";


var is = ["is", "is not", "is like", "includes", "excludes", "is beyond",
	  "extends", "encodes", "represents", "signifies", "consists of"];

for (var i = 0; i < is.length; i = i + 1){
    q.innerHTML += "Code " + is[i] + " language. <br>";
    q.innerHTML += "Language " + is[i] + " code. <br>";
}

q.innerHTML += "\u2014 For Loop";
