// Search Form
$("#searchInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#main .col-12").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

$("#main .card .card-header").on("click", function () {
    $(this).find("h5").toggleClass("text-truncate");
});