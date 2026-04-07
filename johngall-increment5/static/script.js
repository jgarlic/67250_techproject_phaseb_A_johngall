var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    if (C.length < z) {
        console.log(z);
    }
    console.log(C);
} else {
    if (C.length < z) {
        console.log(z);
    } else {
        console.log("good job!");
    }
}


var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

/* function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBanana(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

findTheBanana(L1);
findTheBanana(L2); */


var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greetingEl = document.getElementById("greeting");

    if (!greetingEl) return;

    if (h < 5 || h >= 20) {
        greetingEl.innerHTML = "Good night. Welcome to MonoMuse.";
    } else if (h < 12) {
        greetingEl.innerHTML = "Good morning. Welcome to MonoMuse.";
    } else if (h < 18) {
        greetingEl.innerHTML = "Good afternoon. Welcome to MonoMuse.";
    } else {
        greetingEl.innerHTML = "Good evening. Welcome to MonoMuse.";
    }
}

greeting(hour);


function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (yearEl) {
        yearEl.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();


if (typeof $ !== "undefined") {
    $("#readMore").click(function() {
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });

    $("#readLess").click(function() {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });
}


function showForm() {
    document.getElementById("ticketForm").style.display = "block";
}

/*Part 3*/
function toggleNav() {
    var navbar = document.querySelector('.nav_bar');
    navbar.classList.toggle("responsive");
}


/*Part 5*/
var mapEl = document.getElementById("map");
if (mapEl) {
    var currentpage = L.map('map').setView([40.4433, -79.9436], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(currentpage);

    L.marker([40.4433, -79.9436]).addTo(currentpage)
        .bindPopup('MonoMuse Museum')
        .openPopup();
}