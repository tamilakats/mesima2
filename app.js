$(function () {
    $("#getAll").click(function () {
        let url = "https://restcountries.eu/rest/v2/all";

        ajaxFetch('GET', url, cb);
    });
});

$(function () {
    $("#search").click(function () {

        var searchName = document.getElementById("country");
        let url = "https://restcountries.eu/rest/v2/name/" + searchName.value;

        ajaxFetch('GET', url, cb);
        searchName.value = "";
    });
});


const cb = function (xhr) {
    data = JSON.parse(xhr.responseText);
    var list = document.getElementById("list");


    for (var i = 0; i < data.length; i++) {
        var block = document.createElement("div");
        block.id = "block";
        list.appendChild(block);

        var text = document.createElement("div");
        text.id = "text";
        block.appendChild(text);

        text.innerHTML = `<pre>
        name: ${data[i].name}
        domain: ${data[i].topLevelDomain}
        capital: ${data[i].capital}
        currencies: 
        ${data[i].currencies[0].code}, ${data[i].currencies[0].name}, ${data[i].currencies[0].symbol}       
        </pre>
        `
        var flag = document.createElement("div");
        flag.id = "flag";
        block.appendChild(flag);

        flag.innerHTML = "<img src = '" + data[i].flag + "'>";
    }
}  
