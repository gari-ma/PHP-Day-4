var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")

//this changes whole background color
one.addEventListener("click", function () {

    document.body.style.backgroundColor = "red"
});

two.addEventListener("click", function () {

    document.body.style.backgroundColor = "blue"
});

three.addEventListener("click", function () {

    document.body.style.backgroundColor = "green"
});

// this changes only the bubtton color
one.addEventListener("click", function () {
    one.style.backgroundColor = "red";
});

two.addEventListener("click", function () {
    two.style.backgroundColor = "blue";
});

three.addEventListener("click", function () {
    three.style.backgroundColor = "green";
});