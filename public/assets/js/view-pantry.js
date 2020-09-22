$(document).ready(function() {
   
    $('.delete').on("click", async function(event) {
        const buttonID = $(this).attr('id');
        await $.ajax({
            method: "DELETE",
            url: "/api/items/" + buttonID
        });
        window.location.href = "view-pantry";
    });
       
});