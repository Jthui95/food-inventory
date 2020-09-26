$(document).ready(function() {
    let storageName = $('#storageName').text().toLowerCase();
    if (storageName === 'fridge') {
        expiresSoon('refrigerator');
    } else if (storageName === 'pantry') {
        expiresSoon('pantry');
    } else if (storageName === 'freezer') {
        expiresSoon('freezer');
    }
    // This function determines if the item is expiring soon or is already expired.
    function expiresSoon(location) {
        // This is the amount of days that determines if an item expires soon.
        let expiresSoonDays = 5;
        // These get the current time and the time exactly 4 days from now.
        let currentUnixTimestamp = Math.floor(Date.now() / 1000);
        let currentPlusFiveTimestamp = Math.floor(Date.now() / 1000) + ((expiresSoonDays) * 24 * 3600);
        $.get('/api/items/location/' + location, function(data) {
            for (i = 0; i < data.length; i++) {
                // if expiration date is within 5 days, make card yellow
                if (new Date(data[i].expiration).getTime() / 1000 < currentPlusFiveTimestamp && new Date(data[i].expiration).getTime() / 1000 > currentUnixTimestamp) {
                    $(`#itemInfo${data[i].id}`).attr('style', 'background-color: yellow;');
                // if expiration date is today or before today, make card red
                } else if (new Date(data[i].expiration).getTime() / 1000 <= currentUnixTimestamp) {
                    $(`#itemInfo${data[i].id}`).attr('style', 'background-color: red;');
                } else {
                    $(`#itemInfo${data[i].id}`).attr('style', 'background-color: beige;');
                }
            }    
        });
    }
});