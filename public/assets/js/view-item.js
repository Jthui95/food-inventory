$(document).ready(function() {

    let buttonID;
    let deleteButtonID;
    let newItem;

    let storageName = $('#storageName').text().toLowerCase();
    
    $('.delete').on("click", function(event) {
        deleteButtonID = $(this).attr('id');
        if (storageName === 'fridge') {
            deleteItem('fridge');
        } else if (storageName === 'pantry') {
            deleteItem('pantry');
        } else if (storageName === 'freezer') {
            deleteItem('freezer');
        }
    });

    $('.update').on("click", function(event) {
        buttonID = $(this).attr('id');
        newItem = {
            name: $(`#name${buttonID}`).text().trim(),
            quantity: $(`#quantity${buttonID}`).text().trim(),
            expiration: $(`#expiration${buttonID}`).text().trim(),
            description: $(`#description${buttonID}`).text().trim(),
            id: buttonID
        }
        if (storageName === 'fridge') {
            updateItem('fridge');
        } else if (storageName === 'pantry') {
            updateItem('pantry');
        } else if (storageName === 'freezer') {
            updateItem('freezer');
        }
    });

    async function deleteItem(location) {
        await $.ajax({
            method: "DELETE",
            url: "/api/items/" + deleteButtonID
        });
        window.location.href = "view-" + location;
    }

    async function updateItem(location) {
        alert("Changes Saved!");
        await $.ajax({
            method: "PUT",
            url: "/api/items/",
            data: newItem
        });
        window.location.href = "view-" + location;
    }
});