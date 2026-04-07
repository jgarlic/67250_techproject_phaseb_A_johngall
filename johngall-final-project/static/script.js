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


function toggleNav() {
    var navbar = document.querySelector('.nav_bar');
    navbar.classList.toggle("responsive");
}


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

function updatePrice() {
    var quantityEl = document.getElementById("quantity");
    var priceEl = document.getElementById("priceDisplay");

    if (!quantityEl || !priceEl) return;

    var quantity = parseInt(quantityEl.value);
    if (isNaN(quantity) || quantity < 1) {
        priceEl.innerHTML = "Total: $0";
    } else {
        var total = quantity * 18;
        priceEl.innerHTML = "Total: $" + total;
    }
}

function validateForm() {
    var valid = true;

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var quantity = document.getElementById("quantity").value;
    var date = document.getElementById("date").value;
    var zip = document.getElementById("zip").value;

    var errorEls = document.querySelectorAll(".error-msg");
    errorEls.forEach(function(el) {
        el.classList.remove("visible");
    });

    if (name === "") {
        document.getElementById("nameError").classList.add("visible");
        valid = false;
    }

    if (email === "" || email.indexOf("@") === -1) {
        document.getElementById("emailError").classList.add("visible");
        valid = false;
    }

    if (quantity === "" || parseInt(quantity) < 1) {
        document.getElementById("quantityError").classList.add("visible");
        valid = false;
    }

    if (date === "") {
        document.getElementById("dateError").classList.add("visible");
        valid = false;
    }

    if (zip !== "" && zip.length !== 5) {
        document.getElementById("zipError").classList.add("visible");
        valid = false;
    }

    if (valid) {
        var total = parseInt(quantity) * 18;
        var type = document.getElementById("ticketType").value;
        var mailing = document.getElementById("mailingList").checked ? "yes" : "no";

        window.location.href = "confirmation.html?name=" + name +
            "&quantity=" + quantity +
            "&total=" + total +
            "&date=" + date +
            "&type=" + type +
            "&mailing=" + mailing;
    }
}

function loadConfirmation() {
    var confirmEl = document.getElementById("confirmDetails");
    if (!confirmEl) return;

    var queryString = window.location.search;

    var params = queryString.substring(1).split("&");

    var data = {};
    params.forEach(function(param) {
        var pair = param.split("=");
        data[pair[0]] = decodeURIComponent(pair[1]);
    });

    confirmEl.innerHTML =
        "<p><strong>Name:</strong> " + (data.name || "Guest") + "</p>" +
        "<p><strong>Ticket Type:</strong> " + (data.type || "General") + "</p>" +
        "<p><strong>Quantity:</strong> " + (data.quantity || "1") + "</p>" +
        "<p><strong>Visit Date:</strong> " + (data.date || "N/A") + "</p>" +
        "<p><strong>Total:</strong> $" + (data.total || "18") + "</p>" +
        "<p><strong>Mailing List:</strong> " + (data.mailing === "yes" ? "Yes" : "No") + "</p>";
}

loadConfirmation();

var currentSlide = 0;

function showSlide(index) {
    var slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return; 

    if (index >= slides.length) { currentSlide = 0; }
    if (index < 0) { currentSlide = slides.length - 1; }

    slides.forEach(function(slide) {
        slide.classList.remove("active-slide");
    });
    slides[currentSlide].classList.add("active-slide");

    var counter = document.getElementById("slideCounter");
    if (counter) {
        counter.innerHTML = (currentSlide + 1) + " / " + slides.length;
    }
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

var galleryEl = document.querySelector(".gallery");
if (galleryEl) {
    showSlide(currentSlide);
}