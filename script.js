$.getJSON('https://jsonip.com/', function(data) {

    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
})

