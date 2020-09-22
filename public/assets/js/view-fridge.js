$(document).ready(function() {
    var updatingFridge = false;

    $('.delete').on("click", async function(event) {
        const deleteButtonID = $(this).attr('id');
        updatingFridge = true;
        await $.ajax({
            method: "DELETE",
            url: "/api/items/" + deleteButtonID
        });
        window.location.href = "view-fridge";
    });

});