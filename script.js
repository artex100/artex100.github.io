$.getJSON('http://www.geoplugin.net/json.gp', function (data) {


    // Setting text of element P with id gfg
    $("#gfg").html(data);
});


function klikkaus() {
    window.location.reload();
}


setInterval(() => {
    window.location.reload();
}, 5000);

/*$.getJSON('https://ipinfo.io/json', function (data) {
    console.log(JSON.stringify(data, null, 2))

    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
});
 **/