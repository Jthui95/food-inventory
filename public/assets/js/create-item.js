$(document).ready(function() {
    const nameInput = $("#name-input");
    const quantityInput = $("#quantity-input");
    const expirationInput = $("#expiration-input");
    const descriptionInput = $("#description-input");
    const storageDropdownInput = $("#storageDropdown");
    $('#submit').on("click", function(event) {
        event.preventDefault();
        itemData = {
            name: nameInput.val().trim(),
            quantity: quantityInput.val().trim(),
            expiration: expirationInput.val().trim(),
            description: descriptionInput.val().trim(),
            location: storageDropdownInput.val().trim()
        }
        $.post("/api/items", itemData, function(data) {
            console.log(data); 
        });
        window.location.href = "/";
    });
});