
'use-strict';

function addToCart(courseId) {
    $.ajax({
        method: 'POST',
        url: 'http://localhost:5000/addToCart',
        data: {"courseId":courseId},
        dataType: 'json',
        success: function (response) {
            var numOfItems = response.value;
            console.log(numOfItems);
            var success = response.success;
            if (success) {
                document.querySelector('#cartNumber').innerHTML = numOfItems;
            } else {
                console.log("Failed to add to cart!");
            }
        },
        error: function () {
            //console.log("Error:" + error);
            console.log("Error Failed to add to cart!");
        }
    });
}


