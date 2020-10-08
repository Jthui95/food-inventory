// for future development:
// var CLOUDINARY_URL = process.env.CLOUDINARY_URL;
// var CLOUDNIARY_UPLOAD_PRESET = process.env.CLOUDNIARY_UPLOAD_PRESET;

// var imgPreview = document.getElementById('img-preview');
// var fileUpload = document.getElementById('file-upload');

$(document).ready(function() {
    const nameInput = $("#name-input");
    const quantityInput = $("#quantity-input");
    const expirationInput = $("#expiration-input");
    const descriptionInput = $("#description-input");
    const photoInput = $("#photo-input");
    const storageDropdownInput = $("#storageDropdown");

    $('#submit').on("click", function(event) {
        event.preventDefault();
        itemData = {
            name: nameInput.val().trim(),
            quantity: quantityInput.val().trim(),
            expiration: expirationInput.val().trim(),
            description: descriptionInput.val().trim(),
            location: storageDropdownInput.val().trim(),
            photo: photoInput.val().trim()
        }
        console.log(itemData);
        $.post("/api/items", itemData, function(data) {
            //console.log(data); 
        });
        window.location.href = "/";
    });
});