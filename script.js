$.getJSON('http://ip.jsontest.com/', function (data) {
    console.log(JSON.stringify(data, null, 2))

    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
})