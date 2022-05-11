$.getJSON('https://ipinfo.io/json', function(data) {

    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
})

