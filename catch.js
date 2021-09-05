import fetch from 'cross-fetch';

fetch('data.json')
    .then(function (response) {
        return response.json();
        // JSON data is available here

    })
    .then(function (data) {

        //creates file output
        appendData(data);
    })

    .catch(function (err) {
        comsole.log(err);
        // If error occurred, will show up here

    });


function appendData(data) {
    var mainContainer = document.getElementByClassName("email");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("article");
        article.innerHTML = `${JSON.stringify(data)}`;
        mainContainer.appendChild(article);
    }
};