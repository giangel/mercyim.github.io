(function() {
    // Get the elements with class="column"
    var elements = document.getElementsByClassName("column");

    // Full-width images
    function one() {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flex = "100%";
        }
    }

    // Two images side by side
    function two() {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flex = "50%";
        }
    }

    // Four images side by side
    function four() {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flex = "25%";
        }
    }

    // Add event listeners to buttons or other UI elements
    document.getElementById('btn-one').addEventListener('click', one);
    document.getElementById('btn-two').addEventListener('click', two);
    document.getElementById('btn-four').addEventListener('click', four);
})();