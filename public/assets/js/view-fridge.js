$(document).ready(function() {
    
    $('.delete').on("click", async function(event) {
        const deleteButtonID = $(this).attr('id');
        updatingFridge = true;
        await $.ajax({
            method: "DELETE",
            url: "/api/items/" + deleteButtonID
        });
        window.location.href = "view-fridge";
    });

    $('.update').on("click", async function(event) {
        alert("Changes Saved!");
        const buttonID = $(this).attr('id');
        const newItem = {
            name: $('#name-input').text().trim(),
            quantity: $('#quantity-input').text().trim(),
            expiration: $('#expiration-input').text().trim(),
            description: $('#description-input').text().trim(),
            id: buttonID
        }
        await $.ajax({
            method: "PUT",
            url: "/api/items/",
            data: newItem
        });
        window.location.href = "view-fridge";
    });

});