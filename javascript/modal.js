$(document).ready(function() {
    $("#change-outcome").click(function() {
        $(".container-modal").removeClass("hidden");
    });
    $(".header-modal .fa-times").click(function() {
        $(".container-modal").addClass("hidden");
    });
    $(".container-modal").click(function(event) {
        if (!$(event.target).closest('.modal').length) {
            $(".container-modal").addClass("hidden");
        }
    });
});