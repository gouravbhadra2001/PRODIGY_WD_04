document.addEventListener("DOMContentLoaded", function () {
    const skillset = document.querySelectorAll(".skillset");
    const interestset = document.querySelectorAll(".interestset");


    function toggleState(element) {
        element.classList.toggle("open");
    }

    skillset.forEach(function (element) {
        element.addEventListener("click", function () {
            toggleState(this);
        });
    });

    interestset.forEach(function (element) {
        element.addEventListener("click", function () {
            toggleState(this);
        });
    });
});
