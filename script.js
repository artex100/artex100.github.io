$.getJSON('https://europe-west3-devrcc.cloudfunctions.net/whatismyip', function(data) {

    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
})

