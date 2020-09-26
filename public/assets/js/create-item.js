// var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dkoae4dcu/image/upload";
// var CLOUDNIARY_UPLOAD_PRESET = 'kybowzsz';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

$(document).ready(function() {
    const nameInput = $("#name-input");
    const quantityInput = $("#quantity-input");
    const expirationInput = $("#expiration-input");
    const descriptionInput = $("#description-input");
    const storageDropdownInput = $("#storageDropdown");
    $('#file-upload').on("click", function(event) {
        var file = event.target.files[0];
        var formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDNIARY_UPLOAD_PRESET);
    
        axios({
            url: CLOUDINARY_URL,
            method: "POST",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded"
            } ,
            data: formData 
        }).then(function(res){
            console.log(res);
            imgPreview.src = res.data.secure_url;
        }).catch(function(err){
            console.log(err);
        });
    });
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